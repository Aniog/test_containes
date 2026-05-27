import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-bg/90 backdrop-blur-md border-b border-cosmos-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-cosmos-primary" />
          <span className="font-heading font-bold text-xl text-slate-50 tracking-tight">
            Micro<span className="text-cosmos-primary">Cosmos</span>
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-cosmos-primary'
                    : 'text-slate-300 hover:text-cosmos-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-cosmos-primary transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cosmos-surface border-t border-cosmos-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-cosmos-primary' : 'text-slate-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
