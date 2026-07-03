import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const location = useLocation();
  
  const cartCount = getCartCount();
  
  // Check if we're on a page where navbar should be transparent (homepage hero)
  const isHomepage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?collection=new' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  const shouldBeTransparent = isHomepage && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-smooth ${
          shouldBeTransparent 
            ? 'bg-transparent' 
            : 'bg-warm-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <Link 
              to="/" 
              className={`font-serif text-2xl tracking-ultra uppercase transition-colors duration-300 ${
                shouldBeTransparent ? 'text-warm-white' : 'text-charcoal'
              }`}
            >
              Velmora
            </Link>

            {/* Center: Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:text-gold-500 ${
                    shouldBeTransparent ? 'text-warm-white/90' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 transition-colors duration-300 hover:text-gold-500 ${
                  shouldBeTransparent ? 'text-warm-white' : 'text-charcoal'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Cart */}
              <button
                onClick={openCart}
                className={`p-2 transition-colors duration-300 hover:text-gold-500 relative ${
                  shouldBeTransparent ? 'text-warm-white' : 'text-charcoal'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs 
                                   flex items-center justify-center rounded-full font-sans">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 md:hidden transition-colors duration-300 ${
                  shouldBeTransparent ? 'text-warm-white' : 'text-charcoal'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4 animate-fade-in">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-softGray" />
                <input
                  type="search"
                  placeholder="Search for jewelry..."
                  className="w-full pl-12 pr-4 py-3 bg-cream border border-transparent
                           focus:border-gold-500 focus:outline-none
                           font-sans text-sm placeholder:text-softGray transition-colors"
                  autoFocus
                />
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-warm-white border-t border-cream animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-sans text-base text-charcoal py-2 
                           hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
      
      {/* Spacer for fixed header on non-transparent pages */}
      {!shouldBeTransparent && <div className="h-20" />}
    </>
  );
};

export default Navbar;
