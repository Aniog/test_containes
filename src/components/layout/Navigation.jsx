import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, toggleCart } = useCart();
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
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`w-6 h-6 ${isScrolled || !isHome ? 'text-velmora-text' : 'text-white'}`} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-widest-xl transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-velmora-dark' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-link text-sm uppercase tracking-widest-lg transition-colors duration-300 ${
                    isScrolled || !isHome
                      ? 'text-velmora-text hover:text-velmora-gold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button
                className={`transition-colors duration-300 ${
                  isScrolled || !isHome
                    ? 'text-velmora-text hover:text-velmora-gold'
                    : 'text-white/90 hover:text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                className={`relative transition-colors duration-300 ${
                  isScrolled || !isHome
                    ? 'text-velmora-text hover:text-velmora-gold'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-dark/95 backdrop-blur-lg transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-2xl tracking-widest-xl text-white">VELMORA</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl text-white/90 hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;