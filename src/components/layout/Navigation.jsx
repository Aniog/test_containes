import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
  { to: '/contribute', label: 'Contribute' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur-md border-b border-stardust/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <circle cx="16" cy="16" r="2" fill="#4f8ef7" />
              <circle cx="6" cy="8" r="1.5" fill="#c8a8f0" />
              <circle cx="26" cy="10" r="1" fill="#f0c87a" />
              <circle cx="8" cy="24" r="1" fill="#7ab3ff" />
              <circle cx="24" cy="26" r="1.5" fill="#c8a8f0" />
              <circle cx="28" cy="18" r="1" fill="#f0c87a" />
              <circle cx="4" cy="16" r="1" fill="#7ab3ff" />
              <line x1="16" y1="16" x2="6" y2="8" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="26" y2="10" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="8" y2="24" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="16" y1="16" x2="24" y2="26" stroke="#4f8ef7" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="6" y1="8" x2="26" y2="10" stroke="#c8a8f0" strokeWidth="0.5" strokeOpacity="0.3" />
              <line x1="8" y1="24" x2="24" y2="26" stroke="#c8a8f0" strokeWidth="0.5" strokeOpacity="0.3" />
            </svg>
          </div>
          <span className="font-cinzel font-semibold text-starlight text-lg group-hover:text-aurora-glow transition-colors">
            Memory Archive
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-aurora-glow'
                  : 'text-mist hover:text-starlight'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contribute"
            className="bg-aurora/10 border border-aurora/40 text-aurora text-sm px-4 py-2 rounded-lg hover:bg-aurora/20 transition-all duration-200"
          >
            + Add Memory
          </Link>
        </div>

        <button
          className="md:hidden text-mist hover:text-starlight transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-b border-stardust/30 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium py-2 transition-colors ${
                location.pathname === link.to ? 'text-aurora-glow' : 'text-mist'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contribute"
            className="bg-aurora/10 border border-aurora/40 text-aurora text-sm px-4 py-2 rounded-lg text-center"
          >
            + Add Memory
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
