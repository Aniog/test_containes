import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-gold rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
              <span className="text-gold font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide leading-tight">
                ARTITECT
              </span>
              <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold hover:bg-gold-light text-navy-dark font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Get Quote
            </a>
          </div>

          <button
            className="md:hidden text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-navy-light">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 hover:text-gold text-base font-medium transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-gold hover:bg-gold-light text-navy-dark font-semibold text-center px-6 py-3 rounded-full transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
