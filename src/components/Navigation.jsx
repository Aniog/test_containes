import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, itemCount } = useCart();
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

  const navBg = !isHome || scrolled
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border'
    : 'bg-transparent';

  const textColor = !isHome || scrolled ? 'text-charcoal' : 'text-cream';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl lg:text-3xl tracking-wider ${textColor} no-underline`}>
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`font-sans text-sm uppercase tracking-wider ${textColor} hover:text-accent transition-colors no-underline`}>
              Shop
            </Link>
            <Link to="/shop" className={`font-sans text-sm uppercase tracking-wider ${textColor} hover:text-accent transition-colors no-underline`}>
              Collections
            </Link>
            <Link to="/" className={`font-sans text-sm uppercase tracking-wider ${textColor} hover:text-accent transition-colors no-underline`}>
              About
            </Link>
            <Link to="/" className={`font-sans text-sm uppercase tracking-wider ${textColor} hover:text-accent transition-colors no-underline`}>
              Journal
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-accent transition-colors bg-transparent border-none p-1`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={`${textColor} hover:text-accent transition-colors relative bg-transparent border-none p-1`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-cream text-[10px] flex items-center justify-center font-sans">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden ${textColor} hover:text-accent transition-colors bg-transparent border-none p-1`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <Link to="/shop" className="block font-sans text-sm uppercase tracking-wider text-charcoal hover:text-accent transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop" className="block font-sans text-sm uppercase tracking-wider text-charcoal hover:text-accent transition-colors no-underline">
              Collections
            </Link>
            <Link to="/" className="block font-sans text-sm uppercase tracking-wider text-charcoal hover:text-accent transition-colors no-underline">
              About
            </Link>
            <Link to="/" className="block font-sans text-sm uppercase tracking-wider text-charcoal hover:text-accent transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
