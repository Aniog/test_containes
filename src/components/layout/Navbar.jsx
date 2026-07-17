import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import useCartStore from '@/store/cartStore';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { openCart, getCartCount } = useCartStore();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory-50/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 xl:px-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${transparent ? 'text-ivory-50' : 'text-velvet-950'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${transparent ? 'text-ivory-50' : 'text-velvet-950'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`text-heading text-2xl md:text-3xl font-light tracking-wider transition-colors duration-300 ${
              transparent ? 'text-ivory-50' : 'text-velvet-950'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 hover:opacity-70 ${
                  transparent ? 'text-ivory-50/90' : 'text-velvet-950/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                transparent ? 'text-ivory-50' : 'text-velvet-950'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`relative p-2 transition-colors duration-300 hover:opacity-70 ${
                transparent ? 'text-ivory-50' : 'text-velvet-950'
              }`}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory-50 border-t border-velvet-200 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-sm font-medium tracking-[0.15em] uppercase text-velvet-950/80 hover:text-velvet-950 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
