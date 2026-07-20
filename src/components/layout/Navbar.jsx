import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-cream/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClass = `font-sans text-xs tracking-wider uppercase transition-colors duration-300 ${
    scrolled || !isHome ? 'text-deep-700 hover:text-deep-950' : 'text-cream/90 hover:text-cream'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-deep-700' : 'text-cream'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-deep-700' : 'text-cream'}`} />
            )}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/shop?category=earrings" className={linkClass}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClass}>Necklaces</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300 ${
              scrolled || !isHome ? 'text-deep-800' : 'text-cream'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/shop" className={linkClass}>About</Link>
            <Link to="/shop" className={linkClass}>Journal</Link>
            <button className={`${scrolled || !isHome ? 'text-deep-700' : 'text-cream/90'} hover:text-gold-500 transition-colors`} aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onCartOpen}
              className={`relative ${scrolled || !isHome ? 'text-deep-700' : 'text-cream/90'} hover:text-gold-500 transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold-500 text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile right */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={onCartOpen}
              className={`relative ${scrolled || !isHome ? 'text-deep-700' : 'text-cream/90'}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold-500 text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-cream border-t border-deep-100 px-6 py-4 space-y-3">
          <Link to="/shop" className="block font-sans text-sm text-deep-700 tracking-wider uppercase py-2">Shop</Link>
          <Link to="/shop?category=earrings" className="block font-sans text-sm text-deep-700 tracking-wider uppercase py-2">Earrings</Link>
          <Link to="/shop?category=necklaces" className="block font-sans text-sm text-deep-700 tracking-wider uppercase py-2">Necklaces</Link>
          <Link to="/shop" className="block font-sans text-sm text-deep-700 tracking-wider uppercase py-2">About</Link>
          <Link to="/shop" className="block font-sans text-sm text-deep-700 tracking-wider uppercase py-2">Journal</Link>
        </div>
      </div>
    </nav>
  );
}