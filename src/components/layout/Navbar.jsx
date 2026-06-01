import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
  { to: '/submit', label: 'Submit Memory' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-black/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-nebula-blue/20 border border-nebula-blue/40 flex items-center justify-center group-hover:bg-nebula-blue/30 transition-colors">
            <Star className="w-4 h-4 text-nebula-blue" />
          </div>
          <span className="font-cinzel font-bold text-white text-sm tracking-wider hidden sm:block">
            Memory Archive
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full font-inter text-sm transition-all duration-200 ${
                  active
                    ? 'text-white bg-nebula-blue/15 border border-nebula-blue/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/submit"
            className="px-4 py-2 bg-nebula-blue text-white text-sm font-semibold rounded-full hover:bg-blue-500 transition-all duration-200 shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_25px_rgba(79,142,247,0.5)] font-inter"
          >
            + Add Memory
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-space-navy/95 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg font-inter text-sm transition-colors ${
                    active ? 'text-white bg-nebula-blue/15' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
