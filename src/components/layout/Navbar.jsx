import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/#about' },
  { label: 'Journal', path: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (path) => {
    if (path.startsWith('/#')) {
      const el = document.getElementById(path.slice(2));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  const navBg = scrolled || !isHome
    ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-sm border-b border-velmora-sand/20'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-velmora-black' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${navBg}`}
      >
        <nav className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-[72px]">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-medium tracking-[0.12em] ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav links — desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`font-sans text-body-sm font-light tracking-[0.06em] uppercase ${textColor} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 ${textColor} opacity-80 hover:opacity-100 transition-opacity`}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => toggleDrawer(true)}
              className={`relative p-2 ${textColor} opacity-80 hover:opacity-100 transition-opacity`}
              aria-label="Open cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-velmora-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-velmora-ivory border-b border-velmora-sand/30 shadow-lg animate-fade-in">
            <ul className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="block py-3 font-sans text-body font-light tracking-[0.06em] uppercase text-velmora-black hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
