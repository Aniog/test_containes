import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center">
              <span className="text-brand-dark font-extrabold text-lg leading-none">
                AM
              </span>
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-widest uppercase text-brand-dark">
                ARTITECT
              </span>
              <span className="block text-[10px] font-semibold tracking-widest uppercase text-brand-muted">
                MACHINERY
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="text-sm font-semibold uppercase tracking-wider text-brand-dark hover:text-brand-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="text-sm font-semibold uppercase tracking-wider bg-brand-gold text-brand-dark px-5 py-2.5 rounded hover:bg-brand-bronze transition-colors"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-brand-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block text-sm font-semibold uppercase tracking-wider text-brand-dark hover:text-brand-gold py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="block text-center text-sm font-semibold uppercase tracking-wider bg-brand-gold text-brand-dark px-5 py-3 rounded hover:bg-brand-bronze transition-colors mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
