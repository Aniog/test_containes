import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black border-b border-neutral-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-white font-black text-lg tracking-widest uppercase">
          Microuniverse
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`text-xs tracking-widest uppercase transition-colors ${
              location.pathname === '/' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className={`text-xs tracking-widest uppercase transition-colors ${
              location.pathname === '/gallery' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Gallery
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-neutral-800 px-6 py-6 flex flex-col gap-6">
          <Link to="/" className="text-sm tracking-widest uppercase text-white">Home</Link>
          <Link to="/gallery" className="text-sm tracking-widest uppercase text-neutral-400">Gallery</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
