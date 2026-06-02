import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cosmos-black/90 backdrop-blur-md border-b border-cyan-900/40 shadow-[0_4px_20px_rgba(0,212,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
              <Microscope className="w-4 h-4 text-cosmos-cyan" />
            </div>
            <span className="font-heading font-bold text-lg text-slate-50 tracking-tight">
              Micro<span className="text-cosmos-cyan">Cosmos</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-cosmos-cyan'
                      : 'text-slate-300 hover:text-cosmos-cyan'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/explore"
              className="bg-cosmos-cyan text-cosmos-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-cyan-300 transition-all duration-200"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-cosmos-cyan transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cosmos-navy/95 backdrop-blur-md border-t border-cyan-900/30">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-2 transition-colors duration-200 ${
                    isActive ? 'text-cosmos-cyan' : 'text-slate-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/explore"
              onClick={() => setIsOpen(false)}
              className="bg-cosmos-cyan text-cosmos-black text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-cyan-300 transition-all duration-200 mt-2"
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
