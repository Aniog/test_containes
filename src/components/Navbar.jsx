import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a3a5c] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d4c8] to-[#7c3aed] flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="font-heading font-bold text-lg text-[#e2f0ff] group-hover:text-[#00d4c8] transition-colors">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#00d4c8]'
                    : 'text-[#7ba7cc] hover:text-[#e2f0ff]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-[#00d4c8] text-[#050d1a] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#00b8ad] transition-all"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#e2f0ff] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#e2f0ff] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#e2f0ff] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/98 backdrop-blur-md border-t border-[#1a3a5c] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00d4c8]'
                  : 'text-[#7ba7cc] hover:text-[#e2f0ff]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-[#00d4c8] text-[#050d1a] text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#00b8ad] transition-all text-center mt-2"
          >
            Start Exploring
          </Link>
        </div>
      )}
    </nav>
  );
}
