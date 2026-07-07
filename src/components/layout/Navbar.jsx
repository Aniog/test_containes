import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm border-b border-charcoal-100';

  const textColor = isHome && !scrolled ? 'text-cream' : 'text-charcoal-900';
  const logoColor = isHome && !scrolled ? 'text-cream' : 'text-charcoal-900';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-xs tracking-widest uppercase font-medium hover:text-gold-500 transition-colors ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className={`text-xs tracking-widest uppercase font-medium hover:text-gold-500 transition-colors ${textColor}`}>
              Collections
            </Link>
            <Link to="/" className={`text-xs tracking-widest uppercase font-medium hover:text-gold-500 transition-colors ${textColor}`}>
              About
            </Link>
            <Link to="/" className={`text-xs tracking-widest uppercase font-medium hover:text-gold-500 transition-colors ${textColor}`}>
              Journal
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-super font-semibold ${logoColor}`}>
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className={`${textColor} hover:text-gold-500 transition-colors`} aria-label="Search">
              <Search size={18} />
            </button>
            <button
              onClick={toggleDrawer}
              className={`${textColor} hover:text-gold-500 transition-colors relative`}
              aria-label={`Cart (${itemCount} items)`}
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-500 text-[10px] text-cream rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal-100 px-6 py-6 flex flex-col gap-4 animate-fade-in">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-medium text-charcoal-800">Shop</Link>
          <Link to="/shop?category=necklaces" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-medium text-charcoal-800">Collections</Link>
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-medium text-charcoal-800">About</Link>
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-medium text-charcoal-800">Journal</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;