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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`font-serif text-2xl md:text-3xl font-light tracking-wide ${textColor}`}>
          VELMORA
        </Link>

        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 font-sans text-sm tracking-wide uppercase ${textColor}`}>
          <Link to="/shop" className="hover:opacity-70 transition-opacity duration-300">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:opacity-70 transition-opacity duration-300">Collections</Link>
          <Link to="/about" className="hover:opacity-70 transition-opacity duration-300">About</Link>
          <Link to="/journal" className="hover:opacity-70 transition-opacity duration-300">Journal</Link>
        </div>

        {/* Right Icons */}
        <div className={`flex items-center gap-4 ${textColor}`}>
          <button className="hover:opacity-70 transition-opacity duration-300" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative hover:opacity-70 transition-opacity duration-300"
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden hover:opacity-70 transition-opacity duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-hairline">
          <div className="flex flex-col px-6 py-6 gap-4 font-sans text-sm tracking-wide uppercase text-charcoal">
            <Link to="/shop" className="py-2 border-b border-hairline">Shop</Link>
            <Link to="/shop?category=earrings" className="py-2 border-b border-hairline">Collections</Link>
            <Link to="/about" className="py-2 border-b border-hairline">About</Link>
            <Link to="/journal" className="py-2">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
