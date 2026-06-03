import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/science', label: 'Science' },
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
        scrolled
          ? 'bg-cosmos-surface-2/95 backdrop-blur-md border-b border-cosmos-border shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-cosmos-teal/20 border border-cosmos-teal/40 flex items-center justify-center group-hover:bg-cosmos-teal/30 transition-all">
              <Microscope className="w-4 h-4 text-cosmos-teal" />
            </div>
            <span className="text-cosmos-text font-bold text-lg tracking-tight">
              Micro<span className="text-cosmos-teal">Cosmos</span>
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
                    ? 'text-cosmos-teal'
                    : 'text-cosmos-muted hover:text-cosmos-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cosmos-teal text-cosmos-bg text-sm font-semibold px-5 py-2 rounded-full hover:bg-cosmos-cyan transition-all duration-200"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cosmos-muted hover:text-cosmos-text transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cosmos-surface-2/98 backdrop-blur-md border-b border-cosmos-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.to
                    ? 'text-cosmos-teal'
                    : 'text-cosmos-muted hover:text-cosmos-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/explore"
              className="bg-cosmos-teal text-cosmos-bg text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-cosmos-cyan transition-all"
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
