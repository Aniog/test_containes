import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

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

  const navBg = !isHome || scrolled
    ? 'bg-ivory/95 backdrop-blur-sm border-b border-sand'
    : 'bg-transparent';

  const textColor = !isHome || scrolled ? 'text-charcoal' : 'text-white';

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      navBg
    )}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={cn('font-serif text-2xl md:text-3xl font-light tracking-wider', textColor)}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={cn('text-sm font-sans font-medium tracking-wide uppercase hover:text-gold transition-colors duration-300', textColor)}>
            Shop
          </Link>
          <Link to="/shop" className={cn('text-sm font-sans font-medium tracking-wide uppercase hover:text-gold transition-colors duration-300', textColor)}>
            Collections
          </Link>
          <Link to="/" className={cn('text-sm font-sans font-medium tracking-wide uppercase hover:text-gold transition-colors duration-300', textColor)}>
            About
          </Link>
          <Link to="/" className={cn('text-sm font-sans font-medium tracking-wide uppercase hover:text-gold transition-colors duration-300', textColor)}>
            Journal
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className={cn('p-2 hover:text-gold transition-colors duration-300', textColor)} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={cn('p-2 hover:text-gold transition-colors duration-300 relative', textColor)}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className={cn('p-2 md:hidden hover:text-gold transition-colors duration-300', textColor)}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link to="/shop" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm font-sans font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
