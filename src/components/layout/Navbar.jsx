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

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-base shadow-sm'
    : 'bg-transparent';
  const textClass = scrolled || !isHome
    ? 'text-velmora-dark'
    : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${bgClass}`}
      style={{ transitionDuration: '400ms' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textClass}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-sans">
          <Link to="/shop" className={`hover:text-velmora-accent transition-colors ${textClass}`}>Shop</Link>
          <Link to="/shop?category=Earrings" className={`hover:text-velmora-accent transition-colors ${textClass}`}>Earrings</Link>
          <Link to="/shop?category=Necklaces" className={`hover:text-velmora-accent transition-colors ${textClass}`}>Necklaces</Link>
          <Link to="/shop?category=Huggies" className={`hover:text-velmora-accent transition-colors ${textClass}`}>Huggies</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-widest ${textClass}`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button className={`hover:text-velmora-accent transition-colors ${textClass}`} aria-label="Search">
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={openDrawer}
            className={`relative hover:text-velmora-accent transition-colors ${textClass}`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-accent text-white text-[10px] font-sans rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-base border-t border-velmora-border animate-slide-down">
          <div className="flex flex-col px-6 py-6 gap-4 text-xs tracking-widest uppercase font-sans text-velmora-body">
            <Link to="/shop">Shop All</Link>
            <Link to="/shop?category=Earrings">Earrings</Link>
            <Link to="/shop?category=Necklaces">Necklaces</Link>
            <Link to="/shop?category=Huggies">Huggies</Link>
            <Link to="/about" className="pt-2 border-t border-velmora-border">About</Link>
            <Link to="/journal">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
