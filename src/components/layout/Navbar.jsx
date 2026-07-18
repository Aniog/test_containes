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

  const isTransparent = !scrolled && isHome;
  const textColor = isTransparent ? 'text-warmwhite' : 'text-espresso';
  const bgClass = isTransparent ? 'bg-transparent' : 'bg-warmwhite/95 backdrop-blur-md shadow-sm';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textColor}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase">
          <Link to="/shop" className={`${textColor}/80 hover:${textColor} transition-colors`}>Shop</Link>
          <Link to="/shop/earrings" className={`${textColor}/80 hover:${textColor} transition-colors`}>Earrings</Link>
          <Link to="/shop/necklaces" className={`${textColor}/80 hover:${textColor} transition-colors`}>Necklaces</Link>
          <Link to="/shop/huggies" className={`${textColor}/80 hover:${textColor} transition-colors`}>Huggies</Link>
        </div>

        {/* Logo - centered */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.25em] font-semibold"
          style={{ color: isTransparent ? '#FEFCF9' : '#2C2420' }}
        >
          VELMORA
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className={`hidden md:block ${textColor}/70 hover:${textColor} transition-colors`} aria-label="Search">
            <Search size={18} />
          </button>
          <button
            onClick={openDrawer}
            className={`relative ${textColor} hover:text-gold transition-colors`}
            aria-label={`Cart (${itemCount})`}
          >
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-warmwhite border-t border-warmgray/30 animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-3">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-espresso text-sm tracking-wider uppercase py-2">Shop All</Link>
            <Link to="/shop/earrings" onClick={() => setMobileOpen(false)} className="text-espresso text-sm tracking-wider uppercase py-2">Earrings</Link>
            <Link to="/shop/necklaces" onClick={() => setMobileOpen(false)} className="text-espresso text-sm tracking-wider uppercase py-2">Necklaces</Link>
            <Link to="/shop/huggies" onClick={() => setMobileOpen(false)} className="text-espresso text-sm tracking-wider uppercase py-2">Huggies</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
