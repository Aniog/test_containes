import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !mobileOpen;
  const bg = isTransparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-md';
  const textColor = isTransparent ? 'text-cream' : 'text-deepbrown';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg} ${mobileOpen ? 'bg-cream' : ''}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 ${textColor}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/shop" className={`text-xs tracking-widest uppercase font-sans font-medium hover:text-gold transition-colors ${textColor}`}>
              Shop
            </Link>
            <Link to="/shop?cat=Earrings" className={`text-xs tracking-widest uppercase font-sans font-medium hover:text-gold transition-colors ${textColor}`}>
              Earrings
            </Link>
            <Link to="/shop?cat=Necklaces" className={`text-xs tracking-widest uppercase font-sans font-medium hover:text-gold transition-colors ${textColor}`}>
              Necklaces
            </Link>
            <Link to="/shop?cat=Huggies" className={`text-xs tracking-widest uppercase font-sans font-medium hover:text-gold transition-colors ${textColor}`}>
              Huggies
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className={`font-serif text-2xl lg:text-[28px] tracking-[0.3em] ${textColor} transition-colors`}>
              VELMORA
            </span>
          </Link>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <button className="p-2 hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openCart}
              className="p-2 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-softblack text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 border-t border-deepbrown/10' : 'max-h-0'}`}>
        <div className="px-6 py-6 flex flex-col gap-5 bg-cream">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown">Shop All</Link>
          <Link to="/shop?cat=Earrings" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown">Earrings</Link>
          <Link to="/shop?cat=Necklaces" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown">Necklaces</Link>
          <Link to="/shop?cat=Huggies" onClick={() => setMobileOpen(false)} className="text-xs tracking-widest uppercase font-sans font-medium text-deepbrown">Huggies</Link>
        </div>
      </div>
    </nav>
  );
}
