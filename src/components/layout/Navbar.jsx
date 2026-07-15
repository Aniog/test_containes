import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
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
    ? 'bg-cream/95 backdrop-blur-md border-b border-border shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-2xl md:text-3xl font-semibold tracking-wide ${textColor} no-underline`}>
            VELMORA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-gold transition-colors no-underline`}>
              Shop
            </Link>
            <Link to="/shop" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-gold transition-colors no-underline`}>
              Collections
            </Link>
            <Link to="/about" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-gold transition-colors no-underline`}>
              About
            </Link>
            <Link to="/journal" className={`text-sm uppercase tracking-widest font-medium ${textColor} hover:text-gold transition-colors no-underline`}>
              Journal
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className={`p-2 ${textColor} hover:text-gold transition-colors bg-transparent border-none`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCart}
              className={`p-2 relative ${textColor} hover:text-gold transition-colors bg-transparent border-none`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${textColor} hover:text-gold transition-colors bg-transparent border-none`}
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
            <Link to="/shop" className="font-serif text-3xl text-charcoal hover:text-gold transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-3xl text-charcoal hover:text-gold transition-colors no-underline">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-3xl text-charcoal hover:text-gold transition-colors no-underline">
              About
            </Link>
            <Link to="/journal" className="font-serif text-3xl text-charcoal hover:text-gold transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
