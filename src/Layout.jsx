import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from '@/components/cart/CartDrawer';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, isOpen, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${scrolled ? 'text-charcoal' : 'text-cream'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${scrolled ? 'text-charcoal' : 'text-cream'}`} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <span className={`font-serif text-xl md:text-2xl tracking-widest-xl transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-cream'
              }`}>
                VELMORA
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${
                    scrolled ? 'text-charcoal' : 'text-cream'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`p-2 transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-charcoal' : 'text-cream'
              }`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-gold ${
                  scrolled ? 'text-charcoal' : 'text-cream'
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
