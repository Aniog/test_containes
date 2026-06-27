import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled
    ? 'bg-white/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled ? 'text-velmora-text' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textClass}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
            <Link to="/shop" className={`${textClass} hover:text-velmora-gold transition-colors`}>Shop</Link>
            <Link to="/shop?category=Earrings" className={`${textClass} hover:text-velmora-gold transition-colors`}>Collections</Link>
            <Link to="#" className={`${textClass} hover:text-velmora-gold transition-colors`}>About</Link>
            <Link to="#" className={`${textClass} hover:text-velmora-gold transition-colors`}>Journal</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-[0.15em] ${textClass} absolute left-1/2 -translate-x-1/2`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={onSearchOpen}
              className={`${textClass} hover:text-velmora-gold transition-colors`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`${textClass} hover:text-velmora-gold transition-colors relative`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
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
          mobileOpen ? 'max-h-64 bg-white shadow-md' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4 text-sm tracking-widest uppercase text-velmora-text">
          <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link to="#" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="#" onClick={() => setMobileOpen(false)}>Journal</Link>
        </div>
      </div>
    </nav>
  );
}
