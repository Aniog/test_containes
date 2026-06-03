import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos-black/90 backdrop-blur-md border-b border-cosmos-teal/20 shadow-[0_4px_30px_rgba(0,201,177,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/50 flex items-center justify-center group-hover:bg-cosmos-teal/30 transition-colors">
            <div className="w-3 h-3 rounded-full bg-cosmos-teal animate-pulse-slow" />
          </div>
          <span className="font-grotesk font-bold text-xl text-cosmos-white tracking-tight">
            Micro<span className="text-cosmos-teal">Cosmos</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-sm transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-cosmos-teal'
                  : 'text-cosmos-light hover:text-cosmos-teal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-cosmos-teal text-cosmos-black font-semibold text-sm px-5 py-2 rounded-full hover:bg-cosmos-cyan transition-colors"
          >
            Discover
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cosmos-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cosmos-light transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cosmos-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-dark/95 backdrop-blur-md border-b border-cosmos-teal/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-base py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-cosmos-teal'
                  : 'text-cosmos-light hover:text-cosmos-teal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-cosmos-teal text-cosmos-black font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-cosmos-cyan transition-colors mt-2"
          >
            Discover
          </Link>
        </div>
      )}
    </nav>
  );
}
