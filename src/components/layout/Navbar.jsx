import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = !scrolled && location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-velvet-950/95 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(196,162,101,0.08)]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-warm-50 hover:text-gold-400 transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
          <Link to="/shop" className="text-warm-300 hover:text-gold-400 transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=Earrings" className="text-warm-300 hover:text-gold-400 transition-colors">
            Collections
          </Link>
          <Link to="/about" className="text-warm-300 hover:text-gold-400 transition-colors">
            About
          </Link>
          <Link to="/journal" className="text-warm-300 hover:text-gold-400 transition-colors">
            Journal
          </Link>
        </div>

        {/* Logo - center */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[0.25em] uppercase text-gold-400 hover:text-gold-300 transition-colors"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button className="text-warm-300 hover:text-gold-400 transition-colors" aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={openCart}
            className="relative text-warm-300 hover:text-gold-400 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gold-500 text-[10px] font-medium text-velvet-950 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velvet-950 flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-xl tracking-[0.25em] uppercase text-gold-400">
              VELMORA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-warm-50 hover:text-gold-400 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-lg tracking-wider uppercase">
            <Link to="/shop" className="text-warm-300 hover:text-gold-400 transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=Earrings" className="text-warm-300 hover:text-gold-400 transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-warm-300 hover:text-gold-400 transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-warm-300 hover:text-gold-400 transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
