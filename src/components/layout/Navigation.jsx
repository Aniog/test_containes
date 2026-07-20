import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const getNavBgClass = () => {
    if (!isHome) return 'bg-cream';
    if (isScrolled) return 'bg-cream shadow-sm';
    return 'bg-transparent';
  };

  const getTextClass = () => {
    if (!isHome) return 'text-charcoal';
    if (isScrolled) return 'text-charcoal';
    return 'text-charcoal';
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBgClass()}`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 ${getTextClass()}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-2xl tracking-[0.2em] font-medium ${getTextClass()}`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.08em] hover:text-gold transition-colors duration-300 ${getTextClass()}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button 
                className={`p-2 hover:text-gold transition-colors duration-300 ${getTextClass()}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button 
                className={`p-2 hover:text-gold transition-colors duration-300 relative ${getTextClass()}`}
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal text-xs font-semibold rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-divider bg-cream">
            <div className="container py-4">
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="w-full px-4 py-3 border border-divider bg-white text-charcoal placeholder-taupe focus:outline-none focus:border-gold transition-colors"
                autoFocus
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif text-charcoal py-4 border-b border-divider"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </>
  );
};

export default Navigation;