import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Science', path: '/science' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
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
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
              <Microscope className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-lg font-bold text-slate-50" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors duration-200"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-cyan-300 transition-colors text-center"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
