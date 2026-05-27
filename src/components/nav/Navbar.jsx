import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Microscope } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050d12]/90 backdrop-blur-md border-b border-[#1a3a4a]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <Microscope className="w-6 h-6 text-[#00c9b1] group-hover:text-cyan-300 transition-colors" />
          <span className="font-heading font-bold text-xl text-white tracking-tight">
            Micro<span className="text-[#00c9b1]">Cosmos</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-[#00c9b1]'
                    : 'text-[#7fb3c8] hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#7fb3c8] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a1a24] border-t border-[#1a3a4a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-200 ${
                  isActive ? 'text-[#00c9b1]' : 'text-[#7fb3c8] hover:text-white'
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
