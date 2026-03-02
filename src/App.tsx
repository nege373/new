import { useMemo, useState } from 'react';

type Stats = {
  cash: number;
  reputation: number;
  morale: number;
  legalRisk: number;
};

type Choice = {
  id: string;
  label: string;
  resolve: (stats: Stats, risk: number) => Stats;
};

type EventCard = {
  id: string;
  chapter: 1 | 2 | 3 | 4;
  title: string;
  body: string;
  hint: string;
  choices: [Choice, Choice];
};

const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const initialStats: Stats = {
  cash: 62,
  reputation: 55,
  morale: 58,
  legalRisk: 22,
};

function normalizeStats(stats: Stats): Stats {
  return {
    cash: clamp(stats.cash),
    reputation: clamp(stats.reputation),
    morale: clamp(stats.morale),
    legalRisk: clamp(stats.legalRisk),
  };
}

function chapterForDelivered(delivered: number): 1 | 2 | 3 | 4 {
  if (delivered < 2) return 1;
  if (delivered < 4) return 2;
  if (delivered < 6) return 3;
  return 4;
}

function App() {
  const deck = useMemo(makeDeck, []);
  const [stats, setStats] = useState<Stats>(initialStats);
  const [risk, setRisk] = useState(50);
  const [day, setDay] = useState(1);
  const [delivered, setDelivered] = useState(0);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentChapter = chapterForDelivered(delivered);
  const activeDeck = deck.filter((card) => card.chapter <= currentChapter);
  const card = activeDeck[(day - 1) % activeDeck.length];

  const gameOverReason = getGameOverReason(stats);

  const applyChoice = (choice: Choice) => {
    if (isGameOver) return;

    const riskNormalized = risk / 100;
    const nextStats = normalizeStats(choice.resolve(stats, riskNormalized));

    const nextDay = day + 1;
    let nextDelivered = delivered;
    let nextScore = score + scoreFromTurn(nextStats);

    if (nextDay % 12 === 0) {
      nextDelivered += 1;
      nextScore += 120;
      nextStats.cash = clamp(nextStats.cash + 10);
      nextStats.reputation = clamp(nextStats.reputation + 8);
      nextStats.morale = clamp(nextStats.morale + 6);
      nextStats.legalRisk = clamp(nextStats.legalRisk - 8);
    }

    const entry = `Gün ${day}: ${choice.label} | N:${nextStats.cash} İ:${nextStats.reputation} M:${nextStats.morale} YR:${nextStats.legalRisk}`;

    setHistory((prev) => [entry, ...prev].slice(0, 6));
    setStats(nextStats);
    setDay(nextDay);
    setDelivered(nextDelivered);
    setScore(nextScore);

    if (getGameOverReason(nextStats)) {
      setIsGameOver(true);
    }
  };

  const restart = () => {
    setStats(initialStats);
    setRisk(50);
    setDay(1);
    setDelivered(0);
    setScore(0);
    setHistory([]);
    setIsGameOver(false);
  };

  return (
    <main className="app-shell">
      <section className="panel top">
        <div>
          <p className="kicker">ŞANTİYE: Kriz Yönetimi</p>
          <h1>Bölüm {currentChapter} • Gün {day}</h1>
          <p className="muted">Teslim: {delivered} proje • Skor: {score}</p>
        </div>
        <button onClick={restart} className="ghost-btn" type="button">
          Yeniden Başlat
        </button>
      </section>

      <section className="panel bars">
        <StatBar label="Nakit" value={stats.cash} />
        <StatBar label="İtibar" value={stats.reputation} />
        <StatBar label="Ekip Morali" value={stats.morale} />
        <StatBar label="Yasal Risk" value={100 - stats.legalRisk} suffix="(yüksek kötü)" />
      </section>

      <section className="panel card">
        <p className="badge">Olay Kartı</p>
        <h2>{card.title}</h2>
        <p>{card.body}</p>
        <p className="hint">İpucu: {card.hint}</p>

        <div className="risk-box">
          <label htmlFor="risk">Risk Tercihi: %{risk}</label>
          <input
            id="risk"
            type="range"
            min={0}
            max={100}
            step={1}
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}
          />
          <div className="risk-labels">
            <span>Temkinli</span>
            <span>Agresif</span>
          </div>
        </div>

        <div className="choices">
          {card.choices.map((choice) => (
            <button key={choice.id} onClick={() => applyChoice(choice)} disabled={isGameOver} type="button">
              {choice.label}
            </button>
          ))}
        </div>
      </section>

      <section className="panel log">
        <h3>Son Kararlar</h3>
        {history.length === 0 ? <p className="muted">Henüz karar yok.</p> : history.map((item) => <p key={item}>{item}</p>)}
      </section>

      {isGameOver && (
        <section className="panel game-over">
          <h3>Oyun Bitti: {gameOverReason}</h3>
          <p>{delivered} proje teslim ettin. Final skorun: {score}</p>
          <button onClick={restart} type="button">
            Tekrar Dene
          </button>
        </section>
      )}
    </main>
  );
}

function StatBar({ label, value, suffix }: { label: string; value: number; suffix?: string }) {
  return (
    <div className="stat-row">
      <span>
        {label} {suffix ? <em>{suffix}</em> : null}
      </span>
      <div className="track">
        <div className="fill" style={{ width: `${clamp(value)}%` }} />
      </div>
      <strong>{clamp(value)}</strong>
    </div>
  );
}

function scoreFromTurn(stats: Stats) {
  return Math.round((stats.cash + stats.reputation + stats.morale + (100 - stats.legalRisk)) / 24);
}

function getGameOverReason(stats: Stats) {
  if (stats.cash <= 0) return 'Nakit bitti, şirket iflas etti.';
  if (stats.reputation <= 0) return 'İtibar çöktü, müşteri gelmiyor.';
  if (stats.morale <= 0) return 'Ekip dağıldı, şantiye durdu.';
  if (stats.legalRisk >= 100) return 'Yasal risk patladı, şantiye mühürlendi.';
  return '';
}

function makeDeck(): EventCard[] {
  return [
    {
      id: 'c1',
      chapter: 1,
      title: 'Beton tedarikçisi zam açıklıyor',
      body: 'Yarın %11 zam geliyor. Bugün toplu alım şansı var.',
      hint: 'Agresif stok kararı kısa vadede pahalı ama ileride rahatlatır.',
      choices: [
        {
          id: 'c1-a',
          label: 'Stok yap, işi garantiye al',
          resolve: (s, r) => ({
            cash: s.cash - (9 + 14 * r),
            reputation: s.reputation + (4 + 4 * (1 - r)),
            morale: s.morale + 3,
            legalRisk: s.legalRisk + 1,
          }),
        },
        {
          id: 'c1-b',
          label: 'Bekle, nakiti koru',
          resolve: (s, r) => ({
            cash: s.cash + (4 + 5 * (1 - r)),
            reputation: s.reputation - (4 + 8 * r),
            morale: s.morale - (1 + 4 * r),
            legalRisk: s.legalRisk + (2 + 6 * r),
          }),
        },
      ],
    },
    {
      id: 'c2',
      chapter: 1,
      title: 'Taşeron ücret artışı istiyor',
      body: 'Ekip yarın işi yavaşlatmakla tehdit ediyor.',
      hint: 'Temkinli tercih moral korur, agresif tercih nakit korur.',
      choices: [
        {
          id: 'c2-a',
          label: 'Artışı kabul et',
          resolve: (s, r) => ({
            cash: s.cash - (7 + 9 * r),
            reputation: s.reputation + 3,
            morale: s.morale + (9 + 8 * (1 - r)),
            legalRisk: s.legalRisk - 2,
          }),
        },
        {
          id: 'c2-b',
          label: 'Yeni ekip ara',
          resolve: (s, r) => ({
            cash: s.cash + (3 + 5 * r),
            reputation: s.reputation - (3 + 5 * r),
            morale: s.morale - (8 + 9 * r),
            legalRisk: s.legalRisk + (2 + 7 * r),
          }),
        },
      ],
    },
    {
      id: 'c3',
      chapter: 2,
      title: 'İkinci proje masada: restorasyon ihalesi',
      body: 'İtibar için iyi ama nakit akışını zorlayacak.',
      hint: 'Bu bölümde iki projeyi dolaylı yönetiyorsun; denge önemli.',
      choices: [
        {
          id: 'c3-a',
          label: 'İhaleye gir',
          resolve: (s, r) => ({
            cash: s.cash - (8 + 10 * r),
            reputation: s.reputation + (7 + 5 * (1 - r)),
            morale: s.morale + 2,
            legalRisk: s.legalRisk + (1 + 3 * r),
          }),
        },
        {
          id: 'c3-b',
          label: 'Mevcut projeye odaklan',
          resolve: (s, r) => ({
            cash: s.cash + (5 + 5 * (1 - r)),
            reputation: s.reputation - (2 + 4 * r),
            morale: s.morale - 1,
            legalRisk: s.legalRisk - 2,
          }),
        },
      ],
    },
    {
      id: 'c4',
      chapter: 3,
      title: 'İSG denetimi şantiyeye geldi',
      body: 'İskelede eksik var. Düzeltme için bir gün duruş gerekiyor.',
      hint: 'Agresif seçim anlık para kazandırır ama yasal risk şişirir.',
      choices: [
        {
          id: 'c4-a',
          label: 'Durdur ve tam düzelt',
          resolve: (s, r) => ({
            cash: s.cash - (6 + 5 * (1 - r)),
            reputation: s.reputation + 6,
            morale: s.morale + 3,
            legalRisk: s.legalRisk - (10 + 8 * (1 - r)),
          }),
        },
        {
          id: 'c4-b',
          label: 'İdare et, devam et',
          resolve: (s, r) => ({
            cash: s.cash + (3 + 8 * r),
            reputation: s.reputation - (2 + 6 * r),
            morale: s.morale - (2 + 4 * r),
            legalRisk: s.legalRisk + (9 + 14 * r),
          }),
        },
      ],
    },
    {
      id: 'c5',
      chapter: 4,
      title: 'Büyük altyapı ihalesi final turu',
      body: 'Teminat mektubu pahalı. Kazanırsan şirket seviye atlar.',
      hint: 'Dengeli şirketler burada daha uzun koşar.',
      choices: [
        {
          id: 'c5-a',
          label: 'Teminatı ver, ihaleye yüklen',
          resolve: (s, r) => ({
            cash: s.cash - (12 + 10 * r),
            reputation: s.reputation + (10 + 6 * (1 - r)),
            morale: s.morale + (4 + 2 * (1 - r)),
            legalRisk: s.legalRisk + (2 + 5 * r),
          }),
        },
        {
          id: 'c5-b',
          label: 'Riski azalt, küçük işlere dön',
          resolve: (s, r) => ({
            cash: s.cash + (6 + 5 * (1 - r)),
            reputation: s.reputation - (4 + 3 * r),
            morale: s.morale - (1 + 2 * r),
            legalRisk: s.legalRisk - (3 + 4 * (1 - r)),
          }),
        },
      ],
    },
  ];
}

export default App;
