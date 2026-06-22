import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/matches', label: '赛程赛果' },
  { to: '/standings', label: '积分榜' },
  { to: '/teams', label: '球队' },
  { to: '/news', label: '新闻' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 via-yellow-500 to-green-500 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-sm tracking-wide">FIFA</span>
              <span className="text-yellow-400 font-bold text-xs tracking-widest">WORLD CUP 2026</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-red-400 bg-red-950/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs">
              <span>🇺🇸</span>
              <span>🇨🇦</span>
              <span>🇲🇽</span>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-red-400 bg-red-950/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
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
