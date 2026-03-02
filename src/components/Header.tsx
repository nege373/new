import { Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <a 
            href="https://wa.me/905326550534" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-sm font-medium px-4 py-2 rounded-md transition-all ${
              isScrolled 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
              : 'bg-white text-emerald-600 hover:bg-gray-100'
            }`}
          >
            Randevu Al
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <Instagram className={`${isScrolled ? 'text-emerald-600' : 'text-white'} hover:text-emerald-400 transition-colors`} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;