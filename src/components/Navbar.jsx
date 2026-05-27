import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Organisms', path: '/organisms' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Explore', path: '/explore' },
  { label: 'About', path: '/about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-dark/80 backdrop-blur-md border-b border-teal-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-teal-400 group-hover:text-cyan-300 transition-colors" />
          <span className="font-heading font-bold text-xl text-slate-100 tracking-tight">
            Micro<span className="text-teal-400">Cosmos</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-teal-400'
                  : 'text-slate-300 hover:text-teal-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cosmos-navy border-t border-teal-900/30 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-teal-400'
                  : 'text-slate-300 hover:text-teal-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
