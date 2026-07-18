import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/components/cart/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand/60'
    : 'bg-transparent';

  const linkClass = (path) =>
    `text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 ${
      scrolled ? 'text-espresso hover:text-bronze' : 'text-warmwhite/90 hover:text-warmwhite'
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="container-max section-padding">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo — left */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-widest transition-colors duration-300 flex-shrink-0 ${
              scrolled ? 'text-espresso' : 'text-warmwhite'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
            <Link to="/shop" className={linkClass('/collections')}>Collections</Link>
            <Link to="/" className={linkClass('/about')}>About</Link>
            <Link to="/" className={linkClass('/journal')}>Journal</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
            <button
              className={`p-2 transition-colors ${scrolled ? 'text-espresso hover:text-bronze' : 'text-warmwhite/80 hover:text-warmwhite'}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className={`p-2 transition-colors relative ${scrolled ? 'text-espresso hover:text-bronze' : 'text-warmwhite/80 hover:text-warmwhite'}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-espresso text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ml-2 ${scrolled ? 'text-espresso' : 'text-warmwhite'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        } ${scrolled ? 'bg-cream' : 'bg-espresso/95 backdrop-blur-md'}`}
      >
        <div className="flex flex-col items-center gap-5 py-6">
          <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
          <Link to="/shop" className={linkClass('/collections')}>Collections</Link>
          <Link to="/" className={linkClass('/about')}>About</Link>
          <Link to="/" className={linkClass('/journal')}>Journal</Link>
        </div>
      </div>
    </nav>
  );
}
