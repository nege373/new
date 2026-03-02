const Sessions = () => {
  return (
    <section id="seanslar" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12 text-center">Seanslar</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-emerald-500 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-2xl font-serif text-emerald-700 mb-6">Seans Bilgileri</h3>
            <p className="text-gray-700 leading-relaxed">
              Bireysel terapi seansları yüz yüze ya da online (görüntülü) olarak gerçekleştirilmektedir. Danışan tercihine göre esnek planlama yapılabilir. Her iki formatta da seanslar aynı etik ilkelere bağlı kalınarak yürütülür.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Yüz Yüze Seanslar</h4>
                <p className="text-gray-600 text-sm">Ofis ortamında profesyonel ve güvenli bir terapötik alanda gerçekleştirilen bireysel görüşmeler.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Online Seanslar</h4>
                <p className="text-gray-600 text-sm">Görüntülü görüşme yoluyla, mekandan bağımsız olarak gerçekleştirilen danışma hizmeti.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-emerald-500 shadow-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-2xl font-serif text-emerald-700 mb-6">Etik İlkeler ve Gizlilik</h3>
            <p className="text-gray-700 leading-relaxed">
              Terapiler, etik ilkelere ve mesleki gizliliğe bağlı kalarak yürütülür. Seanslarda paylaşılan her bilgi gizli tutulur ve üçüncü kişilerle paylaşılmaz. Danışanın onayı olmadan hiçbir içerik kaydedilmez veya iletilmez. Güvenli ve saygılı bir terapötik ilişki kurmak, terapinin temelidir.
            </p>
            
            <div className="mt-8 flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Gizlilik Taahhüdü</h4>
                <p className="text-gray-600 text-sm">
                  Türk Psikologlar Derneği ve Amerikan Psikoloji Birliği'nin etik kuralları çerçevesinde, danışanlarımızın mahremiyeti ve gizliliği en yüksek düzeyde korunmaktadır. Terapi sürecinde paylaşılan bilgiler, yasal zorunluluklar dışında kesinlikle gizli tutulur.
                </p>
              </div>
            </div>
          </div>
          
          <a 
            href="https://wa.me/905326550534"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-auto md:mx-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Randevu Almak İçin İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sessions;