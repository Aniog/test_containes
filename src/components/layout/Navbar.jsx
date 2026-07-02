import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/collections' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const { totalItems, openDrawer } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const solid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav links - left */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-accent ${
                  solid ? 'text-foreground' : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.25em] font-semibold transition-colors duration-300 ${
              solid ? 'text-foreground' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 hover:text-accent ${
                solid ? 'text-foreground' : 'text-white/90'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`p-2 relative transition-colors duration-300 hover:text-accent ${
                solid ? 'text-foreground' : 'text-white/90'
              }`}
              onClick={openDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`px-4 py-4 space-y-3 border-t ${
            solid ? 'bg-background border-border' : 'bg-foreground/95 border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`block text-sm uppercase tracking-[0.12em] py-2 ${
                solid ? 'text-foreground' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}