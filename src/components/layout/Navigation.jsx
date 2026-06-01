import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Explore', path: '/explore' },
  { label: 'Submit Memory', path: '/submit' },
  { label: 'About', path: '/about' },
];

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,8,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, #4a9eff, #2563eb)',
                boxShadow: '0 0 12px rgba(74,158,255,0.4)',
              }}
            >
              ✦
            </div>
            <span
              className="font-cinzel font-bold text-base tracking-wide group-hover:text-[#4a9eff] transition-colors"
              style={{ color: '#e8edf5' }}
            >
              Memory Archive
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: location.pathname === link.path ? '#4a9eff' : '#8899b4',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#e8edf5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = location.pathname === link.path ? '#4a9eff' : '#8899b4'; }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/submit')}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: 'rgba(74,158,255,0.12)',
                border: '1px solid rgba(74,158,255,0.3)',
                color: '#4a9eff',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(74,158,255,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(74,158,255,0.12)'; }}
            >
              + Submit Memory
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#8899b4' }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 pt-16"
          style={{ background: 'rgba(5,8,16,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="font-cinzel text-2xl font-semibold transition-colors"
                style={{ color: location.pathname === link.path ? '#4a9eff' : '#e8edf5' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
