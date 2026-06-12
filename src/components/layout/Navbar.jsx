import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-xl' : 'bg-navy/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="10" width="18" height="3" rx="1" fill="#0D1B2A"/>
                <rect x="6" y="4" width="10" height="3" rx="1" fill="#0D1B2A"/>
                <rect x="4" y="15" width="14" height="3" rx="1" fill="#0D1B2A"/>
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-wide">
                ARTITECT
              </div>
              <div className="text-gold text-xs font-semibold tracking-widest uppercase leading-tight">
                MACHINERY
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="bg-gold text-navy font-semibold text-sm px-6 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-white/80 hover:text-gold text-base font-medium py-2 border-b border-white/10 last:border-0 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="bg-gold text-navy font-semibold text-sm px-6 py-3 rounded-lg text-center mt-2 hover:brightness-110 transition-all cursor-pointer"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
