import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome
    ? 'text-velmora-ink'
    : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}>
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textClass}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center links - desktop */}
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase">
            <Link to="/shop" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Shop</Link>
            <Link to="/shop?category=Earrings" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Collections</Link>
            <Link to="/about" className={`hover:text-velmora-gold transition-colors ${textClass}`}>About</Link>
            <Link to="/journal" className={`hover:text-velmora-gold transition-colors ${textClass}`}>Journal</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-super absolute left-1/2 -translate-x-1/2 ${textClass}`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className={`${textClass} hover:text-velmora-gold transition-colors`} aria-label="Search">
              <Search size={19} />
            </button>
            <button
              onClick={toggleDrawer}
              className={`relative ${textClass} hover:text-velmora-gold transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag size={19} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-velmora-cream/98 backdrop-blur-md border-t border-velmora-stone px-6 py-6 flex flex-col gap-5">
          <Link to="/shop" className="text-xs font-medium tracking-widest uppercase text-velmora-ink">Shop</Link>
          <Link to="/shop?category=Earrings" className="text-xs font-medium tracking-widest uppercase text-velmora-ink">Collections</Link>
          <Link to="/about" className="text-xs font-medium tracking-widest uppercase text-velmora-ink">About</Link>
          <Link to="/journal" className="text-xs font-medium tracking-widest uppercase text-velmora-ink">Journal</Link>
        </div>
      </div>
    </nav>
  );
}