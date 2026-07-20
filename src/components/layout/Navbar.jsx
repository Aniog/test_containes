import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Heart } from 'lucide-react';
import useCartStore from '../../store/cartStore';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { openCart, getCartCount } = useCartStore();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal-800' : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 ${textColor} hover:text-gold-500`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl font-light tracking-widest-xl ${textColor} hover:text-gold-500 transition-colors`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/shop"
                className={`font-sans text-sm tracking-wider uppercase ${textColor} hover:text-gold-500 transition-colors`}
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className={`font-sans text-sm tracking-wider uppercase ${textColor} hover:text-gold-500 transition-colors`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`font-sans text-sm tracking-wider uppercase ${textColor} hover:text-gold-500 transition-colors`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`font-sans text-sm tracking-wider uppercase ${textColor} hover:text-gold-500 transition-colors`}
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 ${textColor} hover:text-gold-500 transition-colors`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 ${textColor} hover:text-gold-500 transition-colors hidden sm:block`}
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </button>
              <button
                onClick={openCart}
                className={`p-2 ${textColor} hover:text-gold-500 transition-colors relative`}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-2xl mx-auto px-4 pb-4">
            <input
              type="text"
              placeholder="Search for jewelry..."
              className="w-full px-4 py-3 bg-white border border-ivory-300 rounded-none focus:outline-none focus:border-gold-500 text-charcoal-800 placeholder:text-charcoal-300"
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal-800/50 transition-opacity ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 bg-ivory-100 transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-2xl tracking-widest-xl text-charcoal-800">
                VELMORA
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal-600 hover:text-gold-500"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <Link
                to="/shop"
                className="block font-sans text-lg tracking-wider uppercase text-charcoal-700 hover:text-gold-500 transition-colors"
              >
                Shop All
              </Link>
              <Link
                to="/collections"
                className="block font-sans text-lg tracking-wider uppercase text-charcoal-700 hover:text-gold-500 transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="block font-sans text-lg tracking-wider uppercase text-charcoal-700 hover:text-gold-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/journal"
                className="block font-sans text-lg tracking-wider uppercase text-charcoal-700 hover:text-gold-500 transition-colors"
              >
                Journal
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-ivory-300">
              <div className="space-y-4">
                <a href="#" className="block text-sm text-charcoal-500 hover:text-gold-500">
                  Help & FAQs
                </a>
                <a href="#" className="block text-sm text-charcoal-500 hover:text-gold-500">
                  Contact Us
                </a>
                <a href="#" className="block text-sm text-charcoal-500 hover:text-gold-500">
                  Track Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
