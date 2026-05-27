import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all">
              <Microscope className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-grotesk font-bold text-lg text-white tracking-tight">
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === to
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200"
            >
              Discover
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-base font-medium transition-colors ${
                  location.pathname === to ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-all text-center mt-2"
            >
              Discover
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
