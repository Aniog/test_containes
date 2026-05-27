import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Science', path: '/science' },
  { label: 'About', path: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,212,255,0.1)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff]/30 transition-colors">
            <Microscope className="w-4 h-4 text-[#00d4ff]" />
          </div>
          <span className="text-lg font-black tracking-tight text-[#e8f4f8]">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                location.pathname === link.path
                  ? 'text-[#00d4ff]'
                  : 'text-[#8ab4c8] hover:text-[#e8f4f8]'
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#00d4ff] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/explore"
          className="hidden md:inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold text-sm rounded-full px-5 py-2 hover:bg-[#00ffcc] transition-colors"
        >
          Explore Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#8ab4c8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1f35] border-t border-[rgba(0,212,255,0.1)] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? 'text-[#00d4ff]'
                  : 'text-[#8ab4c8]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="mt-2 inline-flex items-center justify-center bg-[#00d4ff] text-[#050d1a] font-bold text-sm rounded-full px-5 py-3 hover:bg-[#00ffcc] transition-colors"
          >
            Explore Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
