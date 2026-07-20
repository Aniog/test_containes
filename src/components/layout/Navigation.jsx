import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
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
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-warm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor} transition-colors duration-300`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl font-light tracking-wide-xl ${textColor} transition-colors duration-300`}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 ${textColor} transition-colors duration-300`}>
          <Link to="/shop" className="text-sm tracking-wider uppercase hover:opacity-70 transition-opacity">
            Shop
          </Link>
          <Link to="/shop" className="text-sm tracking-wider uppercase hover:opacity-70 transition-opacity">
            Collections
          </Link>
          <Link to="/" className="text-sm tracking-wider uppercase hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link to="/" className="text-sm tracking-wider uppercase hover:opacity-70 transition-opacity">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor} transition-colors duration-300`}>
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-warm">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm tracking-wider uppercase text-brand-charcoal py-2">
              Shop
            </Link>
            <Link to="/shop" className="text-sm tracking-wider uppercase text-brand-charcoal py-2">
              Collections
            </Link>
            <Link to="/" className="text-sm tracking-wider uppercase text-brand-charcoal py-2">
              About
            </Link>
            <Link to="/" className="text-sm tracking-wider uppercase text-brand-charcoal py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
