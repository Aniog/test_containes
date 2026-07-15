import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 -ml-2 text-current"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Center logo + desktop links */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/shop" className="caption hover:text-velmora-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="caption hover:text-velmora-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="caption hover:text-velmora-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="caption hover:text-velmora-accent transition-colors">
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.3em] uppercase text-current no-underline hover:text-current"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-current hover:text-velmora-accent transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className="p-2 text-current hover:text-velmora-accent transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-velmora-accent text-white text-[10px] font-semibold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-velmora-muted">
              <span className="font-serif text-lg tracking-[0.2em] uppercase">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col p-5 gap-1">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">Shop</Link>
              <Link to="/shop?category=earrings" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">Earrings</Link>
              <Link to="/shop?category=necklaces" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">Necklaces</Link>
              <Link to="/shop?category=huggies" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">Huggies</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">About</Link>
              <Link to="/journal" onClick={() => setMobileOpen(false)} className="py-3 body-text border-b border-velmora-muted">Journal</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
