import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-cream/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClasses = `text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'
  }`;

  const logoClasses = `font-serif text-2xl tracking-[0.25em] transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso' : 'text-white'
  }`;

  const iconClasses = `w-5 h-5 transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso hover:text-gold' : 'text-white/90 hover:text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={iconClasses} />
            ) : (
              <Menu className={iconClasses} />
            )}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={linkClasses}>Shop</Link>
            <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
            <Link to="/shop?category=huggies" className={linkClasses}>Huggies</Link>
          </div>

          {/* Logo */}
          <Link to="/" className={`absolute left-1/2 -translate-x-1/2 ${logoClasses}`}>
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button aria-label="Search" className="p-1">
              <Search className={iconClasses} />
            </button>
            <button onClick={openCart} aria-label="Cart" className="p-1 relative">
              <ShoppingBag className={iconClasses} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-border px-6 py-4 flex flex-col gap-4">
          <Link to="/shop" className="text-sm tracking-widest uppercase text-espresso">Shop All</Link>
          <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase text-espresso">Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-sm tracking-widest uppercase text-espresso">Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-sm tracking-widest uppercase text-espresso">Huggies</Link>
        </div>
      </div>
    </nav>
  );
}