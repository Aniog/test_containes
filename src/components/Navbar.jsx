import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleDrawer, totalQty } = useCart();
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

  const navClasses = scrolled
    ? 'bg-paper/95 backdrop-blur shadow-sm text-ink-950'
    : isHome
    ? 'bg-transparent text-white'
    : 'bg-paper text-ink-950';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl font-semibold tracking-widest uppercase"
          >
            VELMORA
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/" className="hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative hover:opacity-70 transition-opacity"
              aria-label="Cart"
              onClick={toggleDrawer}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalQty > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>
            <button
              className="md:hidden hover:opacity-70 transition-opacity"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-ink-100 px-4 py-6 space-y-4 text-ink-950">
          <Link to="/shop" className="block text-sm font-medium tracking-wide">Shop</Link>
          <Link to="/shop" className="block text-sm font-medium tracking-wide">Collections</Link>
          <Link to="/" className="block text-sm font-medium tracking-wide">About</Link>
          <Link to="/" className="block text-sm font-medium tracking-wide">Journal</Link>
        </div>
      )}
    </nav>
  );
}
