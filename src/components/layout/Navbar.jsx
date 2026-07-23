import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
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
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-velmora-cream shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-velmora-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-velmora-charcoal" />
              )}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-velmora-charcoal"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-sans text-sm text-velmora-charcoal hover:text-velmora-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-velmora-gold transition-colors">
                <Search className="w-5 h-5 text-velmora-charcoal" />
              </button>
              <button
                onClick={openCart}
                className="p-2 hover:text-velmora-gold transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-white text-xs flex items-center justify-center rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-velmora-cream transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 font-sans text-lg text-velmora-charcoal border-b border-velmora-border"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;