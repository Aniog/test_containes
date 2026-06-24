import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/groups', label: '小组赛' },
  { to: '/schedule', label: '赛程' },
  { to: '/knockout', label: '淘汰赛' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A]/95 backdrop-blur-sm border-b border-[#2D4A6B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <span className="font-black text-white text-lg tracking-wide">
              世界杯 <span className="text-amber-400">2026</span>
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-400 text-[#0D1B2A]'
                      : 'text-slate-300 hover:text-white hover:bg-[#1C2E45]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-[#2D4A6B] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-400 text-[#0D1B2A]'
                    : 'text-slate-300 hover:text-white hover:bg-[#1C2E45]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
