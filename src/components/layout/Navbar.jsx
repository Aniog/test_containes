import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-velvet-50/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-velvet-950' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop: left nav links */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            <Link to="/shop" className={`text-xs tracking-widest uppercase transition-colors hover:text-gold ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className={`text-xs tracking-widest uppercase transition-colors hover:text-gold ${textColor}`}>
              Collections
            </Link>
          </div>

          {/* Logo - center */}
          <Link to="/" className="flex-shrink-0">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase transition-colors ${textColor}`}>
              VELMORA
            </h1>
          </Link>

          {/* Desktop: right nav links + icons */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <Link to="/about" className={`text-xs tracking-widest uppercase transition-colors hover:text-gold ${textColor}`}>
              About
            </Link>
            <Link to="/about" className={`text-xs tracking-widest uppercase transition-colors hover:text-gold ${textColor}`}>
              Journal
            </Link>
            <button className={`${textColor} transition-colors hover:text-gold`} aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`${textColor} transition-colors hover:text-gold relative`}
              onClick={() => toggleCart()}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile: right icon only */}
          <button
            className={`md:hidden ${textColor} transition-colors hover:text-gold relative`}
            onClick={() => toggleCart()}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velvet-50 border-t border-velvet-950/5 animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block text-sm tracking-wider uppercase text-velvet-950">Shop</Link>
            <Link to="/shop?category=earrings" className="block text-sm tracking-wider uppercase text-velvet-950">Collections</Link>
            <Link to="/about" className="block text-sm tracking-wider uppercase text-velvet-950">About</Link>
            <Link to="/about" className="block text-sm tracking-wider uppercase text-velvet-950">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}