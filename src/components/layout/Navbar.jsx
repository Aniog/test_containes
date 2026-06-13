import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
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
        scrolled ? 'bg-navy/97 shadow-lg shadow-black/30' : 'bg-navy'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(8px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-gold font-bold text-xl leading-tight tracking-tight">
              ARTITECT
            </span>
            <span className="text-surface/70 text-xs tracking-widest uppercase font-sans font-medium leading-tight">
              MACHINERY
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-surface/80 hover:text-gold text-sm font-sans font-medium tracking-wide uppercase transition-colors duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-4 bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-6 py-2.5 hover:bg-gold-light transition-colors duration-200"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-surface p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-gold/20">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-surface/80 hover:text-gold text-sm font-sans font-medium tracking-wide uppercase py-3 text-left border-b border-white/5 transition-colors duration-200 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-4 bg-gold text-navy text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-gold-light transition-colors duration-200"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
