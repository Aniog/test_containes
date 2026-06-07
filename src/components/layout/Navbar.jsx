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
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
              <Microscope className="w-4 h-4 text-teal-400" />
            </div>
            <span className="font-grotesk font-bold text-lg text-slate-100 group-hover:text-teal-400 transition-colors">
              MicroCosmos
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-teal-400 bg-teal-500/10'
                    : 'text-slate-300 hover:text-teal-400 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/explore"
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-teal-400 hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-teal-400 bg-teal-500/10'
                    : 'text-slate-300 hover:text-teal-400 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="mt-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm px-5 py-3 rounded-full text-center transition-all"
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
