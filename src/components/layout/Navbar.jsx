import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
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

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy/98 shadow-lg shadow-black/20' : 'bg-brand-navy/80'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col leading-none"
          >
            <span className="font-serif font-bold text-white text-xl tracking-wide">
              ARTITECT
            </span>
            <span className="font-sans text-brand-accent text-xs tracking-[0.3em] uppercase font-medium">
              MACHINERY
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-brand-mid hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-brand-accent text-brand-navy font-sans font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-accent-light transition-all duration-200 cursor-pointer border-none"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-brand-mid hover:text-white text-base font-medium text-left bg-transparent border-none cursor-pointer py-1 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 bg-brand-accent text-brand-navy font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-accent-light transition-all duration-200 cursor-pointer border-none w-full"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
