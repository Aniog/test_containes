import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/contribute', label: 'Contribute' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-space-navy/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'radial-gradient(circle, #4f8ef7 0%, #8b5cf6 100%)' }}>
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="font-serif text-lg font-bold text-white group-hover:text-nebula-blue transition-colors">
            Mnemo
          </span>
          <span className="hidden sm:block font-sans text-xs text-slate-600 border-l border-slate-700 pl-3">
            Human Memory Archive
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-nebula-blue/15 border border-nebula-blue/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contribute"
            className="hidden md:inline-flex font-sans text-sm bg-nebula-blue hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add Memory
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-space-navy border-t border-slate-800 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`block font-sans text-sm px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'text-white bg-nebula-blue/15'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contribute"
            className="block font-sans text-sm bg-nebula-blue text-white px-4 py-3 rounded-lg text-center mt-3"
          >
            Add Memory
          </Link>
        </div>
      )}
    </nav>
  );
}
