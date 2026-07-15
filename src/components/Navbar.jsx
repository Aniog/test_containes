import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const bgClass = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome ? 'text-espresso' : 'text-white';

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${textClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`nav-link ${textClass}`}>Shop</Link>
            <Link to="/shop?category=earrings" className={`nav-link ${textClass}`}>Collections</Link>
            <Link to="/shop" className={`nav-link ${textClass}`}>About</Link>
            <Link to="/shop" className={`nav-link ${textClass}`}>Journal</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-super font-semibold transition-colors duration-400 ${textClass}`}
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className={`p-2 ${textClass} transition-colors duration-200`} aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className={`p-2 ${textClass} transition-colors duration-200 relative`}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-warmgold text-white text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
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
          mobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}
      >
        <div className="px-4 flex flex-col gap-3 bg-cream/95 backdrop-blur-md">
          <Link to="/shop" className="nav-link text-espresso py-2">Shop</Link>
          <Link to="/shop?category=earrings" className="nav-link text-espresso py-2">Collections</Link>
          <Link to="/shop" className="nav-link text-espresso py-2">About</Link>
          <Link to="/shop" className="nav-link text-espresso py-2">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
