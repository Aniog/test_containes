import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Explore', href: '/explore' },
  { label: 'By Era', href: '/explore?filter=era' },
  { label: 'By Emotion', href: '/explore?filter=emotion' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cosmos-dark/90 backdrop-blur-md border-b border-cosmos-blue/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 relative">
            <div className="absolute inset-0 rounded-full bg-nebula-violet/20 group-hover:bg-nebula-violet/30 transition-colors" />
            <div className="absolute inset-1 rounded-full bg-nebula-violet/40" />
            <div className="absolute inset-2 rounded-full bg-nebula-violet" style={{ boxShadow: '0 0 10px rgba(5,150,105,0.8)' }} />
          </div>
          <span className="font-cinzel text-sm font-semibold text-memory-white tracking-wider">
            Memory<span className="text-stardust-gold">Archive</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-inter transition-colors duration-200 ${
                location.pathname === link.href.split('?')[0]
                  ? 'text-memory-white'
                  : 'text-memory-muted hover:text-memory-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate('/submit')}
            className="px-4 py-2 text-sm bg-nebula-violet/20 hover:bg-nebula-violet/30 border border-nebula-violet/40 hover:border-nebula-violet text-memory-white rounded-full transition-all duration-300 font-inter"
          >
            + Submit Memory
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-memory-muted hover:text-memory-white transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cosmos-dark/95 backdrop-blur-md border-t border-cosmos-blue/20 px-4 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className="text-memory-muted hover:text-memory-white transition-colors font-inter py-2 border-b border-cosmos-blue/10"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => navigate('/submit')}
            className="mt-2 px-4 py-3 text-sm bg-nebula-violet text-white rounded-full font-inter"
          >
            + Submit Memory
          </button>
        </div>
      )}
    </nav>
  );
}
