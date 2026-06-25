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

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex flex-col leading-none"
        >
          <span className="text-brand-gold font-bold text-xl tracking-widest uppercase">
            ARTITECT
          </span>
          <span className="text-brand-white text-xs tracking-[0.3em] uppercase font-light">
            MACHINERY
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-brand-silver hover:text-brand-white text-sm tracking-wide transition-colors duration-200 uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="bg-brand-gold text-brand-navy font-semibold rounded-full px-6 py-2 text-sm hover:bg-brand-gold-light transition-colors duration-200 uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>

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
        <div className="md:hidden bg-brand-navy/98 backdrop-blur-md border-t border-brand-steel/30 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-brand-silver hover:text-brand-white text-base tracking-wide transition-colors uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="bg-brand-gold text-brand-navy font-semibold rounded-full px-6 py-3 text-sm text-center hover:bg-brand-gold-light transition-colors uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
