import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
    { href: '/shop', label: 'Shop' },
    { href: '/shop?category=earrings', label: 'Collections' },
    { href: '/about', label: 'About' },
    { href: '/journal', label: 'Journal' },
  ];

  const shouldBeTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-cream-50 shadow-soft'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-ultra-wide transition-colors duration-300 ${
                shouldBeTransparent ? 'text-white' : 'text-espresso-900'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 hover:text-gold ${
                    shouldBeTransparent ? 'text-white/90' : 'text-espresso-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors duration-200 hover:text-gold ${
                  shouldBeTransparent ? 'text-white' : 'text-espresso-900'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className={`p-2 transition-colors duration-200 hover:text-gold relative ${
                  shouldBeTransparent ? 'text-white' : 'text-espresso-900'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-colors duration-200 ${
                  shouldBeTransparent ? 'text-white' : 'text-espresso-900'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cream-50 pt-[72px]">
          <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-serif text-2xl text-espresso-900 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-espresso-900/95 flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl px-6">
            <div className="flex items-center gap-4 border-b border-white/20 pb-4">
              <Search className="w-6 h-6 text-white/60" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="flex-1 bg-transparent text-white text-xl font-serif placeholder:text-white/40 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
