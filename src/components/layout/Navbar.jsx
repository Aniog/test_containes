import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-navy/98 shadow-lg shadow-black/30' : 'bg-brand-navy/80'
      } backdrop-blur-md border-b border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="9" width="16" height="2.5" rx="1" fill="white"/>
                <rect x="2" y="4" width="10" height="2.5" rx="1" fill="white" opacity="0.6"/>
                <rect x="2" y="14" width="13" height="2.5" rx="1" fill="white" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <span className="text-brand-white font-bold text-sm tracking-widest uppercase leading-none block">
                Artitect
              </span>
              <span className="text-brand-sky text-xs tracking-widest uppercase font-medium leading-none block mt-0.5">
                Machinery
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-silver hover:text-brand-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-brand-blue hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-silver hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-brand-silver hover:text-white text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-brand-blue hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full text-center transition-all"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
