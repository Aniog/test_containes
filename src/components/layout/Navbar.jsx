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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-taupe shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-medium tracking-wide-sm ${textColor} no-underline`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm font-sans font-medium tracking-wide-sm uppercase ${textColor} no-underline hover:opacity-70 transition-opacity`}>
            Shop
          </Link>
          <Link to="/shop" className={`text-sm font-sans font-medium tracking-wide-sm uppercase ${textColor} no-underline hover:opacity-70 transition-opacity`}>
            Collections
          </Link>
          <Link to="/about" className={`text-sm font-sans font-medium tracking-wide-sm uppercase ${textColor} no-underline hover:opacity-70 transition-opacity`}>
            About
          </Link>
          <Link to="/journal" className={`text-sm font-sans font-medium tracking-wide-sm uppercase ${textColor} no-underline hover:opacity-70 transition-opacity`}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className={`p-2 ${textColor} hover:opacity-70 transition-opacity bg-transparent border-none`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`p-2 relative ${textColor} hover:opacity-70 transition-opacity bg-transparent border-none`}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-sans font-medium">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={`p-2 md:hidden ${textColor} hover:opacity-70 transition-opacity bg-transparent border-none`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-taupe">
          <div className="flex flex-col py-6 px-6 gap-4">
            <Link to="/shop" className="text-sm font-sans font-medium tracking-wide-sm uppercase text-charcoal no-underline py-2">
              Shop
            </Link>
            <Link to="/shop" className="text-sm font-sans font-medium tracking-wide-sm uppercase text-charcoal no-underline py-2">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-sans font-medium tracking-wide-sm uppercase text-charcoal no-underline py-2">
              About
            </Link>
            <Link to="/journal" className="text-sm font-sans font-medium tracking-wide-sm uppercase text-charcoal no-underline py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
