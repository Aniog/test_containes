import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Descending' },
  { path: '/reef', label: 'The Reef' },
  { path: '/luminous', label: 'Luminous Life' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(0, 0, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,255,255,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Waves
              className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
              style={{ color: '#00FFFF' }}
            />
            <div
              className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(0,255,255,0.3)' }}
            />
          </div>
          <span
            className="text-xl font-bold tracking-[0.2em] uppercase"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#00FFFF',
              textShadow: '0 0 15px rgba(0,255,255,0.5)',
            }}
          >
            Abyssos
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="relative text-sm tracking-widest uppercase transition-all duration-300 group"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: active ? '#00FFFF' : 'rgba(255,255,255,0.7)',
                  textShadow: active ? '0 0 10px rgba(0,255,255,0.6)' : 'none',
                }}
              >
                {label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #00FFFF, transparent)',
                    width: active ? '100%' : '0%',
                  }}
                />
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.5), transparent)' }}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-full transition-all duration-300"
          style={{ color: '#00FFFF' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(0, 0, 20, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(0,255,255,0.15)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ path, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="text-sm tracking-widest uppercase py-2 transition-all duration-300"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: active ? '#00FFFF' : 'rgba(255,255,255,0.7)',
                  textShadow: active ? '0 0 10px rgba(0,255,255,0.6)' : 'none',
                  borderBottom: '1px solid rgba(0,255,255,0.1)',
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
