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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-sand'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-product ${textColor} transition-colors duration-300`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 ${textColor} transition-colors duration-300`}>
          <Link to="/collection" className="text-sm tracking-wide hover:opacity-70 transition-opacity">
            Shop
          </Link>
          <Link to="/collection" className="text-sm tracking-wide hover:opacity-70 transition-opacity">
            Collections
          </Link>
          <Link to="/" className="text-sm tracking-wide hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link to="/" className="text-sm tracking-wide hover:opacity-70 transition-opacity">
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor} transition-colors duration-300`}>
          <button className="hover:opacity-70 transition-opacity hidden md:block" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="hover:opacity-70 transition-opacity relative"
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
          <button
            className="md:hidden hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-sand">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/collection" className="text-charcoal text-sm tracking-wide py-2 border-b border-sand">
              Shop
            </Link>
            <Link to="/collection" className="text-charcoal text-sm tracking-wide py-2 border-b border-sand">
              Collections
            </Link>
            <Link to="/" className="text-charcoal text-sm tracking-wide py-2 border-b border-sand">
              About
            </Link>
            <Link to="/" className="text-charcoal text-sm tracking-wide py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
