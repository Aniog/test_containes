import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome 
            ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" style={{ color: isScrolled || !isHome ? '#2C2A26' : isHome ? '#FAF7F2' : '#2C2A26' }} />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-2xl lg:text-3xl tracking-[0.15em] font-medium"
              style={{ color: isScrolled || !isHome ? '#2C2A26' : isHome ? '#FAF7F2' : '#2C2A26' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:text-velmora-gold"
                  style={{ color: isScrolled || !isHome ? '#2C2A26' : '#FAF7F2' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button 
                className="p-1 transition-colors duration-300 hover:text-velmora-gold"
                style={{ color: isScrolled || !isHome ? '#2C2A26' : isHome ? '#FAF7F2' : '#2C2A26' }}
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className="p-1 transition-colors duration-300 hover:text-velmora-gold relative"
                onClick={openCart}
                style={{ color: isScrolled || !isHome ? '#2C2A26' : isHome ? '#FAF7F2' : '#2C2A26' }}
              >
                <ShoppingBag className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-velmora-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-velmora-cream animate-slide-down">
            <div className="flex items-center justify-between p-6 border-b border-velmora-sand">
              <span className="font-serif text-2xl tracking-[0.15em]">VELMORA</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-lg uppercase tracking-[0.15em] text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;