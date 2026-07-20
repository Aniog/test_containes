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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border-warm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide ${textColor} transition-colors duration-300`}>
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/collection" className={`text-sm font-sans tracking-wide ${textColor} hover:opacity-70 transition-all duration-300`}>
              Shop
            </Link>
            <Link to="/collection" className={`text-sm font-sans tracking-wide ${textColor} hover:opacity-70 transition-all duration-300`}>
              Collections
            </Link>
            <Link to="/#story" className={`text-sm font-sans tracking-wide ${textColor} hover:opacity-70 transition-all duration-300`}>
              About
            </Link>
            <Link to="/#journal" className={`text-sm font-sans tracking-wide ${textColor} hover:opacity-70 transition-all duration-300`}>
              Journal
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:opacity-70 transition-all duration-300`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`${textColor} hover:opacity-70 transition-all duration-300 relative`}
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className={`md:hidden ${textColor} hover:opacity-70 transition-all duration-300`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link to="/collection" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/collection" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/#story" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/#journal" className="font-serif text-2xl text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
