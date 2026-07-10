import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Why Artitect', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-border-steel' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="flex flex-col leading-none"
        >
          <span className="text-xl font-extrabold tracking-widest text-text-primary uppercase">
            ARTITECT
          </span>
          <span className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            MACHINERY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-sm font-medium text-text-secondary hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
          className="hidden md:inline-flex items-center bg-gold text-navy text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-gold-light transition-colors duration-200 tracking-wide"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-border-steel px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-base font-medium text-text-secondary hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
            className="mt-2 inline-flex justify-center bg-gold text-navy text-sm font-semibold px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
