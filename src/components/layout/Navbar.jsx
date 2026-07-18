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
    ? 'bg-cream/95 backdrop-blur-sm border-b border-hairline'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className={`font-serif text-xl md:text-2xl tracking-wider ${textColor}`}>
            VELMORA
          </Link>

          {/* Center links - desktop */}
          <div className={`hidden md:flex items-center gap-8 text-sm tracking-wider uppercase ${textColor}`}>
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop?category=necklaces" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/journal" className="hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          {/* Right icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <button className="hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="relative hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(true)}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-bronze text-white text-[10px] flex items-center justify-center rounded-full">
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
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream pt-20">
          <div className="flex flex-col items-center gap-8 py-12 text-lg tracking-wider uppercase text-charcoal">
            <Link to="/shop" className="hover:text-bronze transition-colors">Shop</Link>
            <Link to="/shop?category=necklaces" className="hover:text-bronze transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-bronze transition-colors">About</Link>
            <Link to="/journal" className="hover:text-bronze transition-colors">Journal</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
