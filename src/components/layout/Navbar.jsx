import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?collection=new' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'bg-ivory/95 backdrop-blur-sm shadow-subtle'
          : 'bg-transparent'
      }`}
    >
      <nav className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>

          <Link
            to="/"
            className={`font-serif text-2xl font-medium tracking-ultra-wide transition-colors ${
              isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-xs uppercase tracking-medium transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-slate hover:text-gold'
                    : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'text-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-charcoal hover:text-gold'
                  : 'text-white hover:text-white/80'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleCart}
              className={`p-2 relative transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-charcoal hover:text-gold'
                  : 'text-white hover:text-white/80'
              }`}
              aria-label={`Shopping bag with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-xs font-medium rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-ivory border-t border-sand px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-sans text-sm uppercase tracking-medium text-slate hover:text-gold transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
