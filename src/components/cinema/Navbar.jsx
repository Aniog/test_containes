import { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';

const navLinks = [
  { label: 'Now Playing', href: '#now-playing' },
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'Experience', href: '#experience' },
  { label: 'Members', href: '#members' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cinema-black/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-7 h-7 border border-cinema-white flex items-center justify-center group-hover:bg-cinema-white transition-colors duration-300">
              <Film className="w-3.5 h-3.5 text-cinema-white group-hover:text-cinema-black transition-colors duration-300" />
            </div>
            <span className="font-display text-lg font-light tracking-[0.25em] uppercase text-cinema-white">
              Noir
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-mist hover:text-cinema-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="#tickets"
              className="hidden md:inline-flex items-center border border-cinema-white text-cinema-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-cinema-white hover:text-cinema-black transition-all duration-300"
            >
              Book Tickets
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden bg-transparent border-0 p-0 text-cinema-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-cinema-black border-t border-white/5 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-mist hover:text-cinema-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tickets"
            className="inline-flex items-center justify-center border border-cinema-white text-cinema-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-cinema-white hover:text-cinema-black transition-all duration-300 mt-2"
          >
            Book Tickets
          </a>
        </div>
      </div>
    </nav>
  );
}
