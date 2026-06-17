import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span
            className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-brand-navy' : 'text-white'
            }`}
          >
            ARTITECT
          </span>
          <span
            className={`text-xl md:text-2xl font-light tracking-wider transition-colors duration-300 ${
              scrolled ? 'text-brand-gold' : 'text-brand-gold'
            }`}
          >
            MACHINERY
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-gold ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-gold hover:bg-brand-gold-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-gold/25"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                scrolled ? 'bg-brand-navy' : 'bg-white'
              } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                scrolled ? 'bg-brand-navy' : 'bg-white'
              } ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                scrolled ? 'bg-brand-navy' : 'bg-white'
              } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 text-sm font-medium py-2 hover:text-brand-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="bg-brand-gold hover:bg-brand-gold-light text-white px-6 py-2.5 rounded-full text-sm font-semibold text-center transition-all duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}