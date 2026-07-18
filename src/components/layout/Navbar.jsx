import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textClass = (!scrolled && isHome) ? 'text-white' : 'text-velmora-charcoal';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 -ml-2 ${textClass}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links — desktop */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
          <Link to="/shop" className={`hover:text-velmora-gold transition-colors ${textClass}`}>
            Shop
          </Link>
          <Link to="/shop?category=earrings" className={`hover:text-velmora-gold transition-colors ${textClass}`}>
            Collections
          </Link>
          <Link to="/about" className={`hover:text-velmora-gold transition-colors ${textClass}`}>
            About
          </Link>
          <Link to="/journal" className={`hover:text-velmora-gold transition-colors ${textClass}`}>
            Journal
          </Link>
        </div>

        {/* Logo — center */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] tracking-[0.25em] transition-colors ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className={`p-1 transition-colors ${textClass}`} aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            className={`p-1 relative transition-colors ${textClass}`}
            onClick={openDrawer}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-velmora-gold text-[10px] font-medium text-white flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-velmora-cream border-t border-velmora-border px-5 py-6 flex flex-col gap-5">
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-charcoal">
            Shop
          </Link>
          <Link to="/shop?category=earrings" className="text-xs tracking-widest uppercase text-velmora-charcoal">
            Collections
          </Link>
          <Link to="/about" className="text-xs tracking-widest uppercase text-velmora-charcoal">
            About
          </Link>
          <Link to="/journal" className="text-xs tracking-widest uppercase text-velmora-charcoal">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}
