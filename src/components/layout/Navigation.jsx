import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from './CartDrawer';

const Navigation = () => {
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
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled || !isHome
      ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  }`;

  const textColor = isScrolled || !isHome ? 'text-charcoal-900' : 'text-charcoal-900';

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile menu + Desktop links */}
            <div className="flex items-center gap-8">
              <button
                className="lg:hidden p-2 -ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-gold-600 ${textColor}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-charcoal-900"
            >
              VELMORA
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-200 hover:text-gold-600 hidden sm:block ${textColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                className={`p-2 transition-colors duration-200 hover:text-gold-600 relative ${textColor}`}
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal-900 text-cream-50 text-xs font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-cream-50 shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block font-sans text-lg font-medium tracking-wider uppercase text-charcoal-900 hover:text-gold-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-charcoal-800/10">
              <button className="flex items-center gap-3 font-sans text-lg font-medium tracking-wider text-charcoal-900 hover:text-gold-600 transition-colors">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
};

export default Navigation;
