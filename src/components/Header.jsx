import React from 'react';
import { Flower2, Heart, Mail } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flower2 className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Tulip Garden</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-pink-200 transition-colors flex items-center gap-2"
            >
              <Flower2 className="w-4 h-4" />
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-pink-200 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Flower2 className="w-12 h-12 text-pink-200" />
          <h2 className="text-5xl md:text-6xl font-bold">
            Welcome to My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-white">
              Tulip Garden
            </span>
          </h2>
          <Flower2 className="w-12 h-12 text-pink-200" />
        </div>
        
        <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto mb-8">
          Discover the enchanting world of tulips through my carefully curated collection. 
          Each bloom tells a story of beauty, elegance, and the magic of spring.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('gallery')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
          >
            <Flower2 className="w-5 h-5" />
            Explore Gallery
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;