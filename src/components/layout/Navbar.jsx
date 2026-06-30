import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();

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
    { name: 'Journal', path: '/journal' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-surface shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-wider transition-colors duration-300 ${
              isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-sm uppercase tracking-wider transition-colors duration-300 hover:text-gold ${
                  isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button
              className={`p-2 transition-colors duration-300 hover:text-gold ${
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={toggleCart}
              className={`p-2 transition-colors duration-300 hover:text-gold relative ${
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 md:hidden transition-colors duration-300 ${
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-surface shadow-soft transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-sans text-sm uppercase tracking-wider text-charcoal hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
