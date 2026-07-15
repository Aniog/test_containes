import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-warm-900' : 'text-cream';
  const logoColor = scrolled || !isHome ? 'text-warm-900' : 'text-cream';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-gold ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-gold ${textColor}`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-gold ${textColor}`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs tracking-widest uppercase font-medium transition-colors hover:text-gold ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-[0.3em] font-semibold transition-colors ${logoColor}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className={`transition-colors hover:text-gold ${textColor}`} aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={toggleCart}
              className={`relative transition-colors hover:text-gold ${textColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-[10px] font-medium text-cream bg-gold rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-cream-500 px-6 py-6 space-y-4">
          <Link to="/shop" className="block text-sm tracking-widest uppercase font-medium text-warm-900">
            Shop
          </Link>
          <Link to="/shop" className="block text-sm tracking-widest uppercase font-medium text-warm-900">
            Collections
          </Link>
          <Link to="/about" className="block text-sm tracking-widest uppercase font-medium text-warm-900">
            About
          </Link>
          <Link to="/journal" className="block text-sm tracking-widest uppercase font-medium text-warm-900">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}