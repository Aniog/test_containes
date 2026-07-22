import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2 text-warm-700"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide transition-colors">
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-ultra transition-all duration-500 ${
              scrolled ? 'text-warm-900' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors ${
                scrolled ? 'text-warm-700 hover:text-warm-900' : 'text-white hover:text-white/80'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className={`relative p-2 transition-colors ${
                scrolled ? 'text-warm-700 hover:text-warm-900' : 'text-white hover:text-white/80'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-cream-50/95 backdrop-blur-md border-t border-warm-200 px-6 py-4 flex flex-col gap-3">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide py-2">
            Shop
          </Link>
          <Link to="/shop?category=necklaces" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide py-2">
            Collections
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide py-2">
            About
          </Link>
          <Link to="/journal" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-warm-700 hover:text-warm-900 tracking-wide py-2">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}