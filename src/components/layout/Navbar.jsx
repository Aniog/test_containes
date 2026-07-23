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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-warm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-cream';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-0 bg-transparent border-none ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link to="/" className={`font-serif text-xl md:text-2xl tracking-[0.15em] no-underline ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/collection" className={`text-xs uppercase tracking-[0.15em] no-underline hover:opacity-70 transition-opacity ${textColor}`}>
            Shop
          </Link>
          <Link to="/collection" className={`text-xs uppercase tracking-[0.15em] no-underline hover:opacity-70 transition-opacity ${textColor}`}>
            Collections
          </Link>
          <Link to="/#story" className={`text-xs uppercase tracking-[0.15em] no-underline hover:opacity-70 transition-opacity ${textColor}`}>
            About
          </Link>
          <Link to="/#journal" className={`text-xs uppercase tracking-[0.15em] no-underline hover:opacity-70 transition-opacity ${textColor}`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`p-0 bg-transparent border-none ${textColor} hover:opacity-70 transition-opacity`} aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`p-0 bg-transparent border-none relative ${textColor} hover:opacity-70 transition-opacity`}
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-gold text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warm">
          <div className="flex flex-col py-4 px-4 gap-4">
            <Link to="/collection" className="text-xs uppercase tracking-[0.15em] text-charcoal no-underline py-2">
              Shop
            </Link>
            <Link to="/collection" className="text-xs uppercase tracking-[0.15em] text-charcoal no-underline py-2">
              Collections
            </Link>
            <Link to="/#story" className="text-xs uppercase tracking-[0.15em] text-charcoal no-underline py-2">
              About
            </Link>
            <Link to="/#journal" className="text-xs uppercase tracking-[0.15em] text-charcoal no-underline py-2">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
