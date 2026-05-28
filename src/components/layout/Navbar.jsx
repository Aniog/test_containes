import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/science', label: 'Science' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cosmos-bg/95 backdrop-blur-md border-b border-cosmos-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/40 flex items-center justify-center group-hover:bg-cosmos-teal/30 transition">
            <Microscope className="w-5 h-5 text-cosmos-teal" />
          </div>
          <span className="font-heading font-bold text-xl text-[#f0f9ff] tracking-tight">
            Micro<span className="text-cosmos-teal">Cosmos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === to
                  ? 'bg-cosmos-teal/15 text-cosmos-teal'
                  : 'text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/explore"
          className="hidden md:inline-flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#00bfa0] transition-all duration-200"
        >
          Explore Now
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#f0f9ff] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-surface/98 backdrop-blur-md border-t border-cosmos-border px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                location.pathname === to
                  ? 'bg-cosmos-teal/15 text-cosmos-teal'
                  : 'text-[#94a3b8] hover:text-[#f0f9ff] hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/explore"
            className="mt-2 text-center bg-cosmos-teal text-cosmos-bg font-semibold text-sm px-5 py-3 rounded-full hover:bg-[#00bfa0] transition"
          >
            Explore Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
