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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
          : 'bg-white text-[#1A1A1A] shadow-sm'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium">
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
            <Link to="/shop?category=Earrings" className="hover:text-gold transition-colors duration-300">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="hover:text-gold transition-colors duration-300">Necklaces</Link>
            <Link to="/shop?category=Huggies" className="hover:text-gold transition-colors duration-300">Huggies</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.25em] absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button aria-label="Search" className="p-2 -mr-2">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              aria-label="Cart"
              className="p-2 -mr-2 relative"
              onClick={toggleDrawer}
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
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
          mobileOpen ? 'max-h-[300px] border-t border-ivory-alt' : 'max-h-0'
        } ${transparent ? 'bg-[#1A1A1A]/95 text-white' : 'bg-white'}`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-[0.15em] font-medium">
          <Link to="/shop">Shop All</Link>
          <Link to="/shop?category=Earrings">Earrings</Link>
          <Link to="/shop?category=Necklaces">Necklaces</Link>
          <Link to="/shop?category=Huggies">Huggies</Link>
          <Link to="/shop?category=Sets">Gift Sets</Link>
        </div>
      </div>
    </nav>
  );
}
