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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-taupe/10'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-sans tracking-wide ${textColor}`}>
          <Link to="/shop" className="hover:text-warm-gold transition-colors duration-300">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:text-warm-gold transition-colors duration-300">Collections</Link>
          <Link to="/about" className="hover:text-warm-gold transition-colors duration-300">About</Link>
          <Link to="/journal" className="hover:text-warm-gold transition-colors duration-300">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hover:text-warm-gold transition-colors duration-300" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative hover:text-warm-gold transition-colors duration-300"
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-warm-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden hover:text-warm-gold transition-colors duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-taupe/10 px-4 py-6 space-y-4">
          <Link to="/shop" className="block text-charcoal font-sans text-base hover:text-warm-gold transition-colors">Shop</Link>
          <Link to="/shop?category=earrings" className="block text-charcoal font-sans text-base hover:text-warm-gold transition-colors">Collections</Link>
          <Link to="/about" className="block text-charcoal font-sans text-base hover:text-warm-gold transition-colors">About</Link>
          <Link to="/journal" className="block text-charcoal font-sans text-base hover:text-warm-gold transition-colors">Journal</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
