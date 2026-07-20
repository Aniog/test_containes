import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome 
            ? 'bg-background/95 backdrop-blur-md shadow-soft py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 -ml-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={`font-serif text-2xl tracking-widest transition-colors duration-300 ${
                isScrolled || !isHome ? 'text-primary' : isHome ? 'text-primary' : 'text-primary'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors duration-300 hover:text-accent ${
                    isScrolled || !isHome ? 'text-primary' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                className={`p-2 transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-primary' : 'text-primary'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button 
                className={`p-2 transition-colors duration-300 hover:text-accent relative ${
                  isScrolled || !isHome ? 'text-primary' : 'text-primary'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-primary text-xs font-medium flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-serif text-xl tracking-widest">VELMORA</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-serif text-2xl tracking-widest text-primary hover:text-accent transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;