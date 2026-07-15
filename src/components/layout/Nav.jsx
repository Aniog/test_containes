import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileMenuOpen;
  const linkClass = transparent
    ? 'text-cream-100/90 hover:text-cream-50'
    : 'text-charcoal-700 hover:text-charcoal-900';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent py-5'
          : 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className={`w-5 h-5 ${transparent ? 'text-cream-50' : 'text-charcoal-800'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${transparent ? 'text-cream-50' : 'text-charcoal-800'}`} />
          )}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-[28px] font-semibold tracking-widest2 transition-colors duration-300 ${
            transparent ? 'text-cream-50' : 'text-charcoal-900'
          }`}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-[13px] font-medium tracking-wider uppercase transition-colors ${linkClass}`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-[13px] font-medium tracking-wider uppercase transition-colors ${linkClass}`}>
            Collections
          </Link>
          <Link to="/shop" className={`text-[13px] font-medium tracking-wider uppercase transition-colors ${linkClass}`}>
            About
          </Link>
          <Link to="/shop" className={`text-[13px] font-medium tracking-wider uppercase transition-colors ${linkClass}`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className={`p-2 transition-colors ${transparent ? 'text-cream-100/90 hover:text-cream-50' : 'text-charcoal-700 hover:text-charcoal-900'}`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative transition-colors ${transparent ? 'text-cream-100/90 hover:text-cream-50' : 'text-charcoal-700 hover:text-charcoal-900'}`}
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-warm-600 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-charcoal-100 animate-fade-in">
          <div className="flex flex-col px-6 py-6 gap-5">
            <Link to="/shop" className="text-charcoal-800 text-sm font-medium tracking-wider uppercase">Shop</Link>
            <Link to="/shop" className="text-charcoal-800 text-sm font-medium tracking-wider uppercase">Collections</Link>
            <Link to="/shop" className="text-charcoal-800 text-sm font-medium tracking-wider uppercase">About</Link>
            <Link to="/shop" className="text-charcoal-800 text-sm font-medium tracking-wider uppercase">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
