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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-brand-cream/95 backdrop-blur-sm border-b border-brand-divider'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-brand-dark' : 'text-white';

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
        <Link to="/" className={`font-serif text-2xl md:text-3xl tracking-widest ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-8 font-sans text-xs tracking-widest uppercase ${textColor}`}>
          <Link to="/collection" className="hover:opacity-70 transition-opacity">Shop</Link>
          <Link to="/collection" className="hover:opacity-70 transition-opacity">Collections</Link>
          <Link to="/#about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link to="/#journal" className="hover:opacity-70 transition-opacity">Journal</Link>
        </div>

        {/* Right icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(true)}
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-medium flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-divider">
          <div className="flex flex-col px-6 py-6 gap-4 font-sans text-sm tracking-widest uppercase text-brand-dark">
            <Link to="/collection" className="py-2 border-b border-brand-divider">Shop</Link>
            <Link to="/collection" className="py-2 border-b border-brand-divider">Collections</Link>
            <Link to="/#about" className="py-2 border-b border-brand-divider">About</Link>
            <Link to="/#journal" className="py-2">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
}
