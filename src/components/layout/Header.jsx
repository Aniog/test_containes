import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-navy font-extrabold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide leading-tight">
                ARTITECT
              </span>
              <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                Machinery
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-steel hover:bg-steel-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              Get Quote
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-slate-700">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-slate-300 hover:text-gold py-3 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="block bg-steel hover:bg-steel-dark text-white text-center px-5 py-3 rounded-full text-sm font-semibold mt-4 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
