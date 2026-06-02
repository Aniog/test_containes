import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'INDEX' },
  { path: '/collections', label: 'COLLECTIONS' },
  { path: '/lookbook', label: 'LOOKBOOK' },
  { path: '/studio', label: 'THE_STUDIO' },
];

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-neo-black bg-neo-white transition-all duration-200 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono font-bold tracking-[0.3em] text-sm text-neo-black hover:bg-neo-black hover:text-neo-white px-2 py-1 transition-colors duration-150"
          >
            NEO-FORM
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-150 ${
                  location.pathname === path
                    ? 'border-b border-neo-black text-neo-black'
                    : 'text-neo-dim hover:text-neo-black'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-neo-black inline-block" />
            <span className="font-mono text-xs tracking-[0.15em] text-neo-dim">SS_2026</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden font-mono text-xs tracking-[0.2em] border border-neo-black px-3 py-1 bg-neo-white text-neo-black hover:bg-neo-black hover:text-neo-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-neo-black pt-16 flex flex-col">
          <div className="flex flex-col gap-0 mt-8">
            {NAV_LINKS.map(({ path, label }, i) => (
              <Link
                key={path}
                to={path}
                className="font-mono font-bold text-neo-white border-b border-[#333] px-6 py-6 text-2xl tracking-[0.15em] hover:bg-neo-white hover:text-neo-black transition-colors"
              >
                <span className="text-xs text-[#666] mr-4">0{i + 1}</span>
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <p className="font-mono text-xs text-[#444] tracking-[0.2em]">
              NEO-FORM © 2026 — COLLECTIVE
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
