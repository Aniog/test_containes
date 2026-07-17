import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const cartCount = getCartCount();

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
    { to: '/collection', label: 'Shop' },
    { to: '/collection?category=earrings', label: 'Earrings' },
    { to: '/collection?category=necklaces', label: 'Necklaces' },
    { to: '/collection?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-ivory shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-18 md:h-22">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -ml-2 text-velvet"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transition-colors ${
                isScrolled || !isHomePage ? 'text-velvet' : 'text-ivory md:text-velvet'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors hover:text-champagne ${
                    isScrolled || !isHomePage ? 'text-velvet' : 'text-ivory md:text-velvet'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors hover:text-champagne ${
                  isScrolled || !isHomePage ? 'text-velvet' : 'text-ivory md:text-velvet'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                className={`relative p-2 transition-colors hover:text-champagne ${
                  isScrolled || !isHomePage ? 'text-velvet' : 'text-ivory md:text-velvet'
                }`}
                onClick={() => setIsCartOpen(true)}
                aria-label={`Shopping bag with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-champagne text-velvet text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className={`h-px bg-linen transition-opacity ${isScrolled || !isHomePage ? 'opacity-100' : 'opacity-0'}`} />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex-1 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-4 text-lg font-serif tracking-wide border-b border-linen ${
                  index < navLinks.length - 1 ? 'border-b border-linen' : ''
                } text-velvet hover:text-champagne transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="py-8 border-t border-linen">
            <p className="text-sm text-taupe mb-4">Free shipping on orders over $75</p>
            <p className="text-sm text-taupe">30-day returns</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
