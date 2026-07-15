import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
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
          <Link to="/shop" className="text-sm tracking-widest uppercase font-sans hover:text-gold transition-colors">
            Shop
          </Link>
          <Link to="/shop" className="text-sm tracking-widest uppercase font-sans hover:text-gold transition-colors">
            Collections
          </Link>
          <Link to="/" className="text-sm tracking-widest uppercase font-sans hover:text-gold transition-colors">
            About
          </Link>
          <Link to="/" className="text-sm tracking-widest uppercase font-sans hover:text-gold transition-colors">
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button aria-label="Search" className="hover:text-gold transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:text-gold transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            <Link to="/shop" className="text-sm tracking-widest uppercase font-sans text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm tracking-widest uppercase font-sans text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-sm tracking-widest uppercase font-sans text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm tracking-widest uppercase font-sans text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
