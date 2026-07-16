import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      : 'bg-transparent'
  }`;

  const textClass = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white';

  return (
    <nav className={navClass}>
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase">
          <Link to="/shop" className={`${textClass} hover:text-velmora-gold transition-colors`}>
            Shop
          </Link>
          <Link to="/shop?category=Earrings" className={`${textClass} hover:text-velmora-gold transition-colors`}>
            Collections
          </Link>
          <Link to="/" className={`${textClass} hover:text-velmora-gold transition-colors`}>
            About
          </Link>
          <Link to="/" className={`${textClass} hover:text-velmora-gold transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] font-semibold tracking-wider ${
            textClass
          }`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className={`${textClass} hover:text-velmora-gold transition-colors`} aria-label="Search">
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </button>
          <button
            className={`${textClass} hover:text-velmora-gold transition-colors relative`}
            onClick={onCartOpen}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-sand/50 animate-fade-in">
          <div className="flex flex-col py-6 px-6 gap-4">
            <Link to="/shop" className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
              Shop
            </Link>
            <Link to="/shop?category=Earrings" className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
              Collections
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
              About
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wider uppercase text-velmora-charcoal">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}