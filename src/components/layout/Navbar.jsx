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
    ? 'bg-ivory/95 backdrop-blur-sm border-b border-border shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${textColor} bg-transparent border-none`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-wider ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-xs uppercase tracking-widest ${textColor} hover:text-gold transition-colors no-underline`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-xs uppercase tracking-widest ${textColor} hover:text-gold transition-colors no-underline`}>
            Collections
          </Link>
          <Link to="/" className={`text-xs uppercase tracking-widest ${textColor} hover:text-gold transition-colors no-underline`}>
            About
          </Link>
          <Link to="/" className={`text-xs uppercase tracking-widest ${textColor} hover:text-gold transition-colors no-underline`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 ${textColor} hover:text-gold transition-colors bg-transparent border-none`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`p-2 relative ${textColor} hover:text-gold transition-colors bg-transparent border-none`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors no-underline">
              Shop
            </Link>
            <Link to="/shop" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors no-underline">
              Collections
            </Link>
            <Link to="/" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors no-underline">
              About
            </Link>
            <Link to="/" className="text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors no-underline">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
