import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-bg-card/95 backdrop-blur-md shadow-sm border-b border-border-light'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-text' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className={`${textColor} font-serif text-xl md:text-2xl tracking-logo font-medium transition-colors duration-300`}>
          VELMORA
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/collection" className={`nav-link ${scrolled || !isHome ? 'text-text-secondary' : 'text-white/80'} hover:${textColor}`}>
            Shop
          </Link>
          <Link to="/collection" className={`nav-link ${scrolled || !isHome ? 'text-text-secondary' : 'text-white/80'} hover:${textColor}`}>
            Collections
          </Link>
          <Link to="/" className={`nav-link ${scrolled || !isHome ? 'text-text-secondary' : 'text-white/80'} hover:${textColor}`}>
            About
          </Link>
          <Link to="/" className={`nav-link ${scrolled || !isHome ? 'text-text-secondary' : 'text-white/80'} hover:${textColor}`}>
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {}}
            className={`${textColor} hover:text-text-accent transition-colors duration-300`}
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className={`${textColor} hover:text-text-accent transition-colors duration-300 relative`}
            aria-label="Open cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-bg-accent text-white text-[10px] font-medium w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${textColor} hover:text-text-accent transition-colors duration-300`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-card border-t border-border-light animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/collection" className="text-text font-serif text-lg uppercase tracking-wider">
              Shop
            </Link>
            <Link to="/collection" className="text-text font-serif text-lg uppercase tracking-wider">
              Collections
            </Link>
            <Link to="/" className="text-text font-serif text-lg uppercase tracking-wider">
              About
            </Link>
            <Link to="/" className="text-text font-serif text-lg uppercase tracking-wider">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
