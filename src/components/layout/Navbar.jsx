import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 bg-brand-gold rounded-sm flex items-center justify-center">
            <span className="text-brand-navy font-black text-sm leading-none">AM</span>
          </div>
          <div className="text-left">
            <span className="block text-brand-white font-extrabold text-base tracking-tight leading-none">
              ARTITECT
            </span>
            <span className="block text-brand-gold text-xs font-semibold tracking-widest uppercase leading-none mt-0.5">
              MACHINERY
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-brand-silver hover:text-brand-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="bg-brand-gold text-brand-navy font-bold text-sm rounded-full px-6 py-2.5 hover:bg-brand-gold-light transition-colors duration-200"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy/98 backdrop-blur-md border-t border-brand-silver/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-brand-silver hover:text-brand-white text-base font-medium text-left transition-colors duration-200 py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 bg-brand-gold text-brand-navy font-bold text-sm rounded-full px-6 py-3 hover:bg-brand-gold-light transition-colors duration-200 w-full"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
