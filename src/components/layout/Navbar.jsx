import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Explore', path: '/explore' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
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
        scrolled
          ? 'bg-[#050a0e]/95 backdrop-blur-md border-b border-cyan-900/40 shadow-[0_4px_20px_rgba(0,212,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/70 transition-all duration-300">
              <Microscope className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="font-display font-bold text-lg text-slate-50 tracking-tight">
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
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/explore"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/70 transition-all duration-200"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050a0e]/98 backdrop-blur-md border-b border-cyan-900/40">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="mt-2 text-sm font-semibold px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-400 text-center hover:bg-cyan-400/20 transition-all duration-200"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
