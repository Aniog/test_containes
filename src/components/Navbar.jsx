import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/science', label: 'Science' },
  { to: '/about', label: 'About' },
  { to: '/todos', label: 'Todos' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#1a3a5c] shadow-lg shadow-black/30'
          : 'bg-[#050d1a]/80 backdrop-blur-sm border-b border-[#1a3a5c]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
            <Microscope className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            MicroCosmos
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/explore"
            className="bg-cyan-400 text-[#050d1a] text-sm font-semibold px-5 py-2 rounded-full hover:bg-cyan-300 transition-colors"
          >
            Start Exploring
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1628] border-t border-[#1a3a5c] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium py-2 transition-colors ${
                location.pathname === link.to
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="bg-cyan-400 text-[#050d1a] text-sm font-semibold px-5 py-2 rounded-full text-center hover:bg-cyan-300 transition-colors mt-2"
          >
            Start Exploring
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
