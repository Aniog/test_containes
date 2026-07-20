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
    ? 'bg-cream/95 backdrop-blur-md border-b border-hairline'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
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
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wider ${textColor} no-underline hover:opacity-80 transition-opacity`}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/shop"
            className={`text-sm tracking-wider uppercase font-sans font-medium ${textColor} no-underline hover:text-gold transition-colors`}
          >
            Shop
          </Link>
          <Link
            to="/shop?category=earrings"
            className={`text-sm tracking-wider uppercase font-sans font-medium ${textColor} no-underline hover:text-gold transition-colors`}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className={`text-sm tracking-wider uppercase font-sans font-medium ${textColor} no-underline hover:text-gold transition-colors`}
          >
            About
          </Link>
          <Link
            to="/journal"
            className={`text-sm tracking-wider uppercase font-sans font-medium ${textColor} no-underline hover:text-gold transition-colors`}
          >
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            className={`p-2 ${textColor} bg-transparent border-none hover:text-gold transition-colors`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={openCart}
            className={`p-2 relative ${textColor} bg-transparent border-none hover:text-gold transition-colors`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-sans font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-hairline">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link
              to="/shop"
              className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal no-underline py-2 border-b border-hairline"
            >
              Shop
            </Link>
            <Link
              to="/shop?category=earrings"
              className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal no-underline py-2 border-b border-hairline"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal no-underline py-2 border-b border-hairline"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-sm tracking-wider uppercase font-sans font-medium text-charcoal no-underline py-2"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
