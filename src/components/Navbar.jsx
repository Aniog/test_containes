import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    setScrolled(window.scrollY > 40);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const useLight = isHome && !scrolled;
  const textColor = useLight ? 'text-cream-50' : 'text-deep-800';
  const accentHover = useLight ? 'hover:text-cream-300' : 'hover:text-gold-600';
  const mutedColor = useLight ? 'text-cream-100/80' : 'text-deep-700';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || !isHome
          ? 'bg-deep-50/95 backdrop-blur-sm shadow-sm border-b border-deep-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 -ml-2 ${mutedColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav */}
          <div className={`hidden md:flex items-center gap-8 text-sm tracking-wider ${textColor}`}>
            <Link to="/shop" className={`transition-colors ${accentHover}`}>
              SHOP
            </Link>
            <Link to="/shop/earrings" className={`transition-colors ${accentHover}`}>
              EARRINGS
            </Link>
            <Link to="/shop/necklaces" className={`transition-colors ${accentHover}`}>
              NECKLACES
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-widest font-medium transition-colors duration-400 ${textColor}`}
            style={{ letterSpacing: '0.2em' }}
          >
            VELMORA
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button className={`p-2 ${mutedColor} ${accentHover} transition-colors`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`p-2 ${mutedColor} ${accentHover} transition-colors relative`}
              onClick={openDrawer}
              aria-label={`Cart (${itemCount})`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-600 text-white text-[10px] font-medium flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-deep-50 border-t border-deep-100 animate-fade-in">
          <div className="flex flex-col px-4 py-4 gap-3">
            <Link to="/shop" className="text-sm text-deep-800 tracking-wider py-2 hover:text-gold-600 transition-colors">
              SHOP ALL
            </Link>
            <Link to="/shop/earrings" className="text-sm text-deep-800 tracking-wider py-2 hover:text-gold-600 transition-colors">
              EARRINGS
            </Link>
            <Link to="/shop/necklaces" className="text-sm text-deep-800 tracking-wider py-2 hover:text-gold-600 transition-colors">
              NECKLACES
            </Link>
            <Link to="/shop/huggies" className="text-sm text-deep-800 tracking-wider py-2 hover:text-gold-600 transition-colors">
              HUGGIES
            </Link>
            <hr className="border-deep-200 my-1" />
            <Link to="/about" className="text-sm text-deep-500 tracking-wider py-2 hover:text-gold-600 transition-colors">
              ABOUT
            </Link>
            <Link to="/journal" className="text-sm text-deep-500 tracking-wider py-2 hover:text-gold-600 transition-colors">
              JOURNAL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
