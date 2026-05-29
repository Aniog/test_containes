import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Bell, Search, User } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/generator', label: 'AI Generator' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/social', label: 'Community' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-2xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
          <span className="font-dream text-lg font-bold text-shimmer hidden sm:block">
            Dream Exchange
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                location.pathname === to
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-purple-200/70 hover:text-purple-200 hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full glass hover:bg-white/10 transition-colors text-purple-300">
            <Search className="w-4 h-4" />
          </button>
          <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full glass hover:bg-white/10 transition-colors text-purple-300 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
          </button>
          <Link
            to="/social"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 font-body"
          >
            <User className="w-4 h-4" />
            Profile
          </Link>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full glass text-purple-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all font-body ${
                location.pathname === to
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-purple-200/70 hover:text-purple-200 hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
