const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">
      <div className="container relative h-full mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-white z-10">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 animate-fadeIn">
            Zeynep Ceylan
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 animate-fadeIn animation-delay-200">
            Klinik Psikolog
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 animate-fadeIn animation-delay-300 italic">
            "Birlikte anlamaya, keşfetmeye, iyileşmeye..."
          </p>
          <nav className="hidden md:block animate-fadeIn animation-delay-400">
            <ul className="flex flex-wrap justify-center gap-6">
              {['Hakkımda', 'Çalışma Alanlarım', 'Şema Terapi', 'Seanslar', 'İletişim'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white hover:text-emerald-200 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className="fixed bottom-0 left-0 right-0 bg-emerald-800 md:hidden z-50">
        <div className="container mx-auto px-4 py-3">
          <ul className="flex justify-between items-center overflow-x-auto whitespace-nowrap gap-4">
            {['Hakkımda', 'Çalışma Alanlarım', 'Şema Terapi', 'Seanslar', 'İletişim'].map((item) => (
              <li key={item} className="flex-shrink-0">
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white text-sm hover:text-emerald-200 transition-colors block px-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Hero;