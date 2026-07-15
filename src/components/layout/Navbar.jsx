import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Mobile menu button */}
        <button
          className={`lg:hidden ${textColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl lg:text-3xl font-semibold tracking-wide ${textColor} transition-colors`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/shop" className={`text-sm uppercase tracking-widest ${textColor} hover:text-gold transition-colors`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-sm uppercase tracking-widest ${textColor} hover:text-gold transition-colors`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm uppercase tracking-widest ${textColor} hover:text-gold transition-colors`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm uppercase tracking-widest ${textColor} hover:text-gold transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:text-gold transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`${textColor} hover:text-gold transition-colors relative`}
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors py-2">
              Shop
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors py-2">
              Collections
            </Link>
            <Link to="/about" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors py-2">
              About
            </Link>
            <Link to="/journal" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
