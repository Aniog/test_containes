import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/matches', label: '赛程' },
  { to: '/groups', label: '小组赛' },
  { to: '/players', label: '球星' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="bg-[#0a0e1a]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#f5a623] to-[#e09415] rounded-lg flex items-center justify-center shadow-lg shadow-[#f5a623]/30">
              <Trophy className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-sm tracking-wide">FIFA</span>
              <span className="text-[#f5a623] font-bold text-xs tracking-widest">WORLD CUP 2026</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-[#f5a623]/15 text-[#f5a623]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Live Badge */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#e63946]/15 border border-[#e63946]/30 rounded-full px-3 py-1.5">
              <span className="w-2 h-2 bg-[#e63946] rounded-full animate-pulse" />
              <span className="text-[#e63946] text-xs font-bold">LIVE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0d1526] border-t border-gray-800 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isActive(link.to)
                  ? 'bg-[#f5a623]/15 text-[#f5a623]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
