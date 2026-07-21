import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartActions } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCartActions();
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-charcoal shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
          <Link to="/shop" className={`hover:opacity-70 transition-opacity ${transparent ? 'text-white/90' : 'text-velmora-warmgray'}`}>Shop</Link>
          <Link to="/shop?category=Earrings" className={`hover:opacity-70 transition-opacity ${transparent ? 'text-white/90' : 'text-velmora-warmgray'}`}>Collections</Link>
          <Link to="/about" className={`hover:opacity-70 transition-opacity ${transparent ? 'text-white/90' : 'text-velmora-warmgray'}`}>About</Link>
          <Link to="/journal" className={`hover:opacity-70 transition-opacity ${transparent ? 'text-white/90' : 'text-velmora-warmgray'}`}>Journal</Link>
        </div>

        {/* Logo - centered */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-widest whitespace-nowrap transition-colors duration-500 ${
            transparent ? 'text-white' : 'text-velmora-charcoal'
          }`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={openDrawer}
            aria-label={`Cart with ${itemCount} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-sans font-bold text-white bg-velmora-gold rounded-full">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="container-site pb-6 flex flex-col gap-4 text-sm font-medium tracking-wider uppercase text-velmora-charcoal bg-velmora-cream/95 backdrop-blur-md">
          <Link to="/shop" className="py-2">Shop</Link>
          <Link to="/shop?category=Earrings" className="py-2">Collections</Link>
          <Link to="/about" className="py-2">About</Link>
          <Link to="/journal" className="py-2">Journal</Link>
        </div>
      </div>
    </nav>
  );
}
