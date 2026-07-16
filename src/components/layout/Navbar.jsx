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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const bgClass = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm';

  const textClass = isHome && !scrolled ? 'text-white' : 'text-espresso';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass} ${
        scrolled || !isHome ? 'border-b border-warm-sand' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className={`md:hidden ${textClass}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-[0.1em] uppercase font-medium">
            <Link to="/shop" className={`${textClass} hover:text-accent transition-colors`}>Shop</Link>
            <Link to="/shop?category=earrings" className={`${textClass} hover:text-accent transition-colors`}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={`${textClass} hover:text-accent transition-colors`}>Necklaces</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.2em] uppercase ${textClass} transition-colors`}
          >
            Velmora
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className={`${textClass} hover:text-accent transition-colors`} aria-label="Search">
              <Search size={18} />
            </button>
            <button
              className={`${textClass} hover:text-accent transition-colors relative`}
              onClick={onCartOpen}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent text-white text-[10px] font-semibold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64 border-t border-warm-sand bg-cream' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <Link to="/shop" className="text-sm tracking-[0.1em] uppercase font-medium text-espresso">Shop All</Link>
          <Link to="/shop?category=earrings" className="text-sm tracking-[0.1em] uppercase font-medium text-espresso">Earrings</Link>
          <Link to="/shop?category=necklaces" className="text-sm tracking-[0.1em] uppercase font-medium text-espresso">Necklaces</Link>
          <Link to="/shop?category=huggies" className="text-sm tracking-[0.1em] uppercase font-medium text-espresso">Huggies</Link>
        </div>
      </div>
    </nav>
  );
}
