import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — left */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-widest text-espresso flex-shrink-0"
          >
            VELMORA
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            <Link to="/shop" className="text-espresso/80 hover:text-espresso transition-colors">Shop</Link>
            <Link to="/shop?category=Earrings" className="text-espresso/80 hover:text-espresso transition-colors">Collections</Link>
            <Link to="/" className="text-espresso/80 hover:text-espresso transition-colors">About</Link>
            <Link to="/" className="text-espresso/80 hover:text-espresso transition-colors">Journal</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className="p-2 text-espresso/80 hover:text-espresso transition-colors" aria-label="Search">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={onCartOpen}
              className="p-2 text-espresso/80 hover:text-espresso transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -mr-2 text-espresso"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border animate-slide-in-from-top">
          <div className="flex flex-col px-4 py-6 gap-4">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase text-espresso/80">Shop</Link>
            <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase text-espresso/80">Collections</Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase text-espresso/80">About</Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm tracking-wider uppercase text-espresso/80">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}