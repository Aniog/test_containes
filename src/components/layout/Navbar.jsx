import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
    isTransparent
      ? 'bg-transparent text-white'
      : 'bg-cream/95 backdrop-blur-md text-charcoal shadow-sm'
  }`;

  return (
    <nav className={navClass}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase">
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <Link to="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] tracking-[0.28em] whitespace-nowrap"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => toggleCart()}
              className="p-2 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-ink-100/20 py-6 animate-slide-down">
            <div className="flex flex-col gap-4 text-sm font-medium tracking-wider uppercase">
              <Link to="/shop" className="py-2">Shop All</Link>
              <Link to="/shop?category=earrings" className="py-2">Earrings</Link>
              <Link to="/shop?category=necklaces" className="py-2">Necklaces</Link>
              <Link to="/shop?category=huggies" className="py-2">Huggies</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}