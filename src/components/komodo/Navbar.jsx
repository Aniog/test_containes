import { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const homeLinks = [
  { label: 'About', href: '#about' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Best Time', href: '#best-time' },
  { label: 'Travel Tips', href: '#tips' },
  { label: 'Gallery', href: '#gallery' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSectionClick = (href) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const alwaysOpaque = !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || alwaysOpaque ? 'bg-ocean/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-white font-serif font-bold text-xl tracking-wide no-underline"
        >
          <Compass className="w-6 h-6 text-coral" />
          <span>Komodo</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {homeLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleSectionClick(link.href)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/tours"
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-medium transition-colors no-underline ${
              location.pathname === '/tours' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
          >
            Tours
          </Link>
          <button
            onClick={() => handleSectionClick('#gallery')}
            className="bg-coral hover:bg-coral-dark text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors border-none cursor-pointer"
          >
            Plan Your Trip
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ocean/98 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-4 py-4 gap-1">
            {homeLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleSectionClick(link.href)}
                className="text-white/80 hover:text-white text-base font-medium py-3 text-left bg-transparent border-none cursor-pointer transition-colors border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/tours"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium py-3 border-b border-white/10 no-underline"
            >
              Tours
            </Link>
            <button
              onClick={() => handleSectionClick('#gallery')}
              className="mt-3 bg-coral hover:bg-coral-dark text-white font-semibold rounded-full px-5 py-3 transition-colors border-none cursor-pointer"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
