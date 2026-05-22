import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Geography', href: '/geography' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'Teams', href: '/teams' },
  { label: 'Safety', href: '/safety' },
  { label: 'Gallery', href: '/gallery' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Always show solid bg on non-home pages
  const solidBg = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-white font-black text-xl tracking-tight">
          <Mountain className="w-6 h-6 text-amber-500" />
          <span>SummitQuest</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                  location.pathname === link.href ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-colors"
        >
          Join Expedition
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 border-t border-slate-800 px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-base font-medium transition-colors block ${
                    location.pathname === link.href ? 'text-amber-400' : 'text-slate-300 hover:text-amber-400'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Join Expedition
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
