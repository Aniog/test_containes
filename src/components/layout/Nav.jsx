import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop/earrings" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              Earrings
            </Link>
            <Link to="/shop/necklaces" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              Necklaces
            </Link>
            <Link to="/shop/huggies" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              Huggies
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-ink">
            VELMORA
          </Link>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/collections" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-[11px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors">
              Journal
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button aria-label="Search" className="p-1.5 text-taupe hover:text-ink transition-colors">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              aria-label="Open cart"
              className="p-1.5 text-taupe hover:text-ink transition-colors relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-cream/95 backdrop-blur-md border-t border-warm-border space-y-4">
          <Link to="/shop/earrings" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            Earrings
          </Link>
          <Link to="/shop/necklaces" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            Necklaces
          </Link>
          <Link to="/shop/huggies" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            Huggies
          </Link>
          <Link to="/collections" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            Collections
          </Link>
          <Link to="/about" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link to="/journal" className="block text-[11px] uppercase tracking-[0.15em] text-taupe" onClick={() => setMobileOpen(false)}>
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}