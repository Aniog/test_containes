import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
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
    ? 'bg-brand-cream/95 backdrop-blur-md border-b border-brand-sand/50 shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wide-nav ${textColor} transition-colors`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-xs font-medium tracking-wide-nav uppercase ${textColor} hover:text-brand-gold transition-colors`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-xs font-medium tracking-wide-nav uppercase ${textColor} hover:text-brand-gold transition-colors`}>
            Collections
          </Link>
          <Link to="/" className={`text-xs font-medium tracking-wide-nav uppercase ${textColor} hover:text-brand-gold transition-colors`}>
            About
          </Link>
          <Link to="/" className={`text-xs font-medium tracking-wide-nav uppercase ${textColor} hover:text-brand-gold transition-colors`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:text-brand-gold transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`${textColor} hover:text-brand-gold transition-colors relative`}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-sand/50 animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm font-medium tracking-wide-nav uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm font-medium tracking-wide-nav uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wide-nav uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm font-medium tracking-wide-nav uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
