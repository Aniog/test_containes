import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-velmora-espresso' : 'text-white';
  const linkColor = scrolled || !isHome ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-white/80 hover:text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs font-medium tracking-widest uppercase transition-colors ${linkColor}`}>Shop</Link>
            <Link to="/shop?category=necklaces" className={`text-xs font-medium tracking-widest uppercase transition-colors ${linkColor}`}>Collections</Link>
            <Link to="/about" className={`text-xs font-medium tracking-widest uppercase transition-colors ${linkColor}`}>About</Link>
            <Link to="/journal" className={`text-xs font-medium tracking-widest uppercase transition-colors ${linkColor}`}>Journal</Link>
          </div>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-widest ${textColor}`}>
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <button className={`${textColor} transition-colors hover:text-velmora-gold`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textColor} transition-colors hover:text-velmora-gold`}
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
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
          mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
        } bg-velmora-cream/95 backdrop-blur-md`}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          <Link to="/shop" className="text-xs font-medium tracking-widest uppercase text-velmora-charcoal">Shop</Link>
          <Link to="/shop?category=necklaces" className="text-xs font-medium tracking-widest uppercase text-velmora-charcoal">Collections</Link>
          <Link to="/about" className="text-xs font-medium tracking-widest uppercase text-velmora-charcoal">About</Link>
          <Link to="/journal" className="text-xs font-medium tracking-widest uppercase text-velmora-charcoal">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
