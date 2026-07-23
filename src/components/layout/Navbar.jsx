import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2 text-charcoal-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo - left */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] text-charcoal-900">
              VELMORA
            </span>
          </Link>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/shop" className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors">Shop</Link>
            <Link to="/shop?category=Earrings" className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors">Collections</Link>
            <Link to="/about" className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors">About</Link>
            <Link to="/journal" className="text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors">Journal</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4 md:space-x-5">
            <button className="p-2 text-charcoal-700 hover:text-charcoal-900 transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="p-2 text-charcoal-700 hover:text-charcoal-900 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 border-t border-warm-200' : 'max-h-0'
        }`}
      >
        <div className="bg-cream-50/95 backdrop-blur-md px-6 py-4 space-y-4">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors py-1">Shop</Link>
          <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)} className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors py-1">Collections</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors py-1">About</Link>
          <Link to="/journal" onClick={() => setMobileOpen(false)} className="block text-xs font-sans uppercase tracking-[0.2em] text-charcoal-700 hover:text-charcoal-900 transition-colors py-1">Journal</Link>
        </div>
      </div>
    </nav>
  );
}