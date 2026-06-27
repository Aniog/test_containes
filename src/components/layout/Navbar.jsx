import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm border-b border-hairline shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-espresso' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300">
            Shop
          </Link>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300">
            Collections
          </Link>
          <Link to="/about" className="text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300">
            About
          </Link>
          <Link to="/journal" className="text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button aria-label="Search" className="hover:text-gold transition-colors duration-300">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={openCart}
            aria-label="Cart"
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-hairline">
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium text-espresso hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest font-medium text-espresso hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-widest font-medium text-espresso hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest font-medium text-espresso hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
