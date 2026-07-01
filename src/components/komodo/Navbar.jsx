import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Best Time', href: '#best-time' },
  { label: 'Travel Tips', href: '#tips' },
  { label: 'Gallery', href: '#gallery' },
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
        scrolled ? 'bg-ocean/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-white font-serif font-bold text-xl tracking-wide"
        >
          <Compass className="w-6 h-6 text-coral" />
          <span>Komodo</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#gallery')}
            className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors border-none cursor-pointer"
          >
            Plan Your Trip
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ocean/98 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-white text-base font-medium py-3 text-left bg-transparent border-none cursor-pointer transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#gallery')}
              className="mt-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full px-5 py-3 transition-colors border-none cursor-pointer"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
