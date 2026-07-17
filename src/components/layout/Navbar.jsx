import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream';

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold ${textColor} transition-colors duration-300`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full`}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=necklaces"
              className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full`}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full`}
            >
              About
            </Link>
            <Link
              to="/journal"
              className={`text-xs font-sans font-medium tracking-extra-wide uppercase ${textColor} hover:text-brand-gold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className={`${textColor} hover:text-brand-gold transition-colors duration-200`} aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative ${textColor} hover:text-brand-gold transition-colors duration-200`}
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 bg-brand-cream z-40 md:hidden transition-all duration-300 ease-out ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="px-6 py-8 space-y-5 border-t border-brand-sand">
          <Link to="/shop" className="block text-sm font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
            Shop
          </Link>
          <Link to="/shop?category=necklaces" className="block text-sm font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
            Collections
          </Link>
          <Link to="/about" className="block text-sm font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
            About
          </Link>
          <Link to="/journal" className="block text-sm font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
