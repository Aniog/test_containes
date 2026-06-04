import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Descending' },
  { path: '/reef', label: 'The Reef' },
  { path: '/luminous', label: 'Luminous Life' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-abyss-900/80 backdrop-blur-lg shadow-lg shadow-cyan/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-cyan hover:text-cyan-200 transition-colors duration-300"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ABYSSOS
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2 rounded-bubble text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-cyan bg-cyan/10'
                    : 'text-white/60 hover:text-cyan hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan animate-pulse-glow" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-white/80 hover:text-cyan transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-2 bg-abyss-900/95 backdrop-blur-lg">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-bubble text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-cyan bg-cyan/10'
                    : 'text-white/60 hover:text-cyan'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}