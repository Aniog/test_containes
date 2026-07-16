import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const bgClass = !isHome || scrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = !isHome || scrolled ? 'text-charcoal' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 -ml-2 ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
            <Link to="/shop" className={`hover:text-gold transition-colors ${textClass}`}>Shop</Link>
            <Link to="/shop/earrings" className={`hover:text-gold transition-colors ${textClass}`}>Earrings</Link>
            <Link to="/shop/necklaces" className={`hover:text-gold transition-colors ${textClass}`}>Necklaces</Link>
            <Link to="/shop/huggies" className={`hover:text-gold transition-colors ${textClass}`}>Huggies</Link>
          </div>

          {/* Logo - center */}
          <Link
            to="/"
            className={`font-serif text-xl lg:text-2xl tracking-[0.15em] absolute left-1/2 -translate-x-1/2 transition-colors ${textClass}`}
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className={`p-2 ${textClass} hover:text-gold transition-colors`} aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              className={`p-2 ${textClass} hover:text-gold transition-colors relative`}
              onClick={onCartOpen}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-sand/30 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link to="/shop" className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">Shop All</Link>
            <Link to="/shop/earrings" className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">Earrings</Link>
            <Link to="/shop/necklaces" className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">Necklaces</Link>
            <Link to="/shop/huggies" className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">Huggies</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
