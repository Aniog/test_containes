import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-black/95 backdrop-blur-md border-b border-teal-900/40 shadow-[0_4px_30px_rgba(15,118,110,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-700 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(13,148,136,0.5)] group-hover:shadow-[0_0_30px_rgba(13,148,136,0.8)] transition-all">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="font-cinzel text-xl font-bold text-mist tracking-widest">
            NEXUS <span className="text-gold">VOYAGES</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="font-cinzel text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-500 transition-all duration-300 shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(13,148,136,0.6)] tracking-wider"
          >
            Book a Portal
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mist hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-space-black/98 backdrop-blur-md border-t border-teal-900/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-base font-medium text-gray-300 hover:text-gold transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="font-cinzel text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 text-white text-center tracking-wider mt-2"
          >
            Book a Portal
          </a>
        </div>
      )}
    </nav>
  );
}
