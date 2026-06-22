import React from 'react';
import { Microscope, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Microscope className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-wider">MicroCosmos</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#discoveries" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Discoveries</a>
              <a href="#gallery" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#about" className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#discoveries" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Discoveries</a>
            <a href="#gallery" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Gallery</a>
            <a href="#about" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;