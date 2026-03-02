const About = () => {
  return (
    <section id="hakkımda" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12 text-center">Hakkımda</h2>
        
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-2/5 lg:w-1/3">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://i.hizliresim.com/6rnx96d.jpeg"
                alt="Zeynep Ceylan Klinik Psikolog" 
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 lg:w-2/3 text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Klinik Psikolog Zeynep Ceylan, 2009 yılında Bilgi Üniversitesi Psikoloji Bölümü'nden mezun olmuştur. Lisans eğitimi sürecinde Erenköy Ruh ve Sinir Hastalıkları Hastanesi'nde gönüllü stajyerlik yapmıştır. Mezuniyetinin ardından, Güzel Günler Kliniği'nde Prof. Dr. Yankı Yazgan'ın ekibinde yaklaşık iki yıl araştırma asistanı olarak görev almıştır. Bu süreçte, Marmara Üniversitesi Tıp Fakültesi'nde Dr. Yankı Yazgan'ın yürüttüğü klinik görüşmeleri gözlemlemiş ve poliklinik sonrasında tedavi süreçlerinin tartışıldığı haftalık seminerlere katılmıştır.
            </p>
            
            <p className="leading-relaxed">
              Ardından, özel bir okulda okul psikoloğu olarak görev yapmıştır.
            </p>
            
            <p className="leading-relaxed">
              Mesleki kariyerine 10 yıl ara verdikten sonra, İstanbul Rumeli Üniversitesi'nde Klinik Psikoloji yüksek lisans programını tamamlamıştır. Yüksek lisans sürecinde, süpervizyon kapsamında İstanbul Rumeli Üniversitesi Psikoloji Uygulama ve Araştırma Merkezi'nde bir dönem boyunca yüz yüze ve online olarak danışan görmüştür. Bu süreçte iki farklı terapi ekolü (Bilişsel Davranışçı Terapi ve Şema Terapi) ile, iki ayrı süpervizör eşliğinde terapi uygulamıştır.
            </p>
            
            <p className="leading-relaxed">
              Yüksek lisans eğitimini, "Dikkat Dağınıklığı ve Hiperaktivite Tanısı ile Erteleme Davranışı Arasındaki İlişkide Sorumlu Kişilik Özelliğinin Aracı Rolü" konulu projesi ile tamamlamıştır.
            </p>
            
            <p className="leading-relaxed">
              Şu anda yüz yüze ve online terapi seansları yürütmektedir.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-serif text-emerald-700 mb-4">Aldığı Eğitim ve Sertifikalar:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>07.05.25-09.05.25 Yeme Bozuklukları için Geliştirilmiş Bilişsel Davranışçı Terapi Eğitimi, Prof. Dr. Aslıhan Dönmez, Doç. Dr. Hakan Öğütlü</li>
                <li>05.12.2024-21.12.2024 ISST Onaylı Şema Terapi Temel Eğitimi, Klinik Psikolog Dr. Bahar Köse</li>
                <li>"Mesleğe Adım Atarken Klinik Beceri Eğitimi" Dr. Yankı Yazgan, Dr. Berk Murat Ergün</li>
                <li>17.04.2010 - 18.04.2010 Dr. Padesky ile Kognitif-Davranışçı Terapi Eğitim Kampı</li>
                <li>20.03.2010 -20.09.2010 Bilişsel Davranışçı Terapi Eğitimi, Prof. Dr. Hakan Türkçapar</li>
                <li>19.12.2010 Dr.Leslie Greenberg "Emotion-Focused Therapy seminar Boğaziçi Üniversitesi</li>
                <li>03.11.2009 - 15.12.2009 Türk Psikologlar Derneği Uzm.Psk. Serap Altekin'in verdiği "Ayrılık, Kayıp ve Yas Üzerine Psikoterapötik Çalışma" eğitimi</li>
                <li>28.05.2008 Judith Beck "Neden Kognitif Terapi"semineri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;