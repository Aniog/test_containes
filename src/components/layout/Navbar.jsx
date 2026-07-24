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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-velmora-ink' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className={`text-xs font-sans tracking-[0.15em] uppercase ${textColor} hover:text-velmora-gold transition-colors`}>
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className={`text-xs font-sans tracking-[0.15em] uppercase ${textColor} hover:text-velmora-gold transition-colors`}>
              Collections
            </Link>
            <Link to="/about" className={`text-xs font-sans tracking-[0.15em] uppercase ${textColor} hover:text-velmora-gold transition-colors`}>
              About
            </Link>
            <Link to="/journal" className={`text-xs font-sans tracking-[0.15em] uppercase ${textColor} hover:text-velmora-gold transition-colors`}>
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl lg:text-3xl tracking-[0.3em] font-normal ${logoColor} transition-colors`}>
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className={`${textColor} hover:text-velmora-gold transition-colors`} aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openDrawer}
              className={`relative ${textColor} hover:text-velmora-gold transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-velmora-gold text-[10px] font-sans font-medium text-white flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="bg-velmora-cream/98 backdrop-blur-md border-t border-velmora-sand px-6 py-6 space-y-4">
          <Link to="/shop" className="block text-xs font-sans tracking-[0.15em] uppercase text-velmora-ink">Shop</Link>
          <Link to="/shop?category=necklaces" className="block text-xs font-sans tracking-[0.15em] uppercase text-velmora-ink">Collections</Link>
          <Link to="/about" className="block text-xs font-sans tracking-[0.15em] uppercase text-velmora-ink">About</Link>
          <Link to="/journal" className="block text-xs font-sans tracking-[0.15em] uppercase text-velmora-ink">Journal</Link>
        </div>
      </div>
    </nav>
  );
}