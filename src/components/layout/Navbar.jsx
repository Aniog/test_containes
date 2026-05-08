import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/breeds', label: 'Breeds' },
  { to: '/care', label: 'Care & Training' },
  { to: '/facts', label: 'Fun Facts' },
  { to: '/quiz', label: 'Quiz' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐴</span>
            <span
              className="text-white font-bold text-xl tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              HorseWise
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === to
                    ? 'bg-[#c8860a] text-white'
                    : 'text-amber-100 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#2c1810] border-t border-white/10 px-4 pb-4 pt-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-all ${
                pathname === to
                  ? 'bg-[#c8860a] text-white'
                  : 'text-amber-100 hover:bg-white/10'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
