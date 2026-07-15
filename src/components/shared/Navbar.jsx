import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const bg = scrolled || !isHome
    ? 'bg-velmora-bg/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const text = scrolled || !isHome ? 'text-velmora-charcoal' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl tracking-widest font-semibold ${text} transition-colors duration-500`}
          >
            VELMORA
          </Link>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${text} transition-colors duration-500`}>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Collections</Link>
            <Link to="/" className="hover:text-velmora-gold transition-colors">About</Link>
            <Link to="/" className="hover:text-velmora-gold transition-colors">Journal</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className={`${text} hover:text-velmora-gold transition-colors`} aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className={`relative ${text} hover:text-velmora-gold transition-colors`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-velmora-gold text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className={`md:hidden ${text} hover:text-velmora-gold transition-colors`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-velmora-bg border-t border-velmora-border">
          <div className="flex flex-col px-5 py-6 gap-4 text-velmora-charcoal text-sm font-medium tracking-wide">
            <Link to="/shop" className="py-2 border-b border-velmora-border">Shop</Link>
            <Link to="/shop" className="py-2 border-b border-velmora-border">Collections</Link>
            <Link to="/" className="py-2 border-b border-velmora-border">About</Link>
            <Link to="/" className="py-2">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
