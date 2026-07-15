import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Layout({ children, transparentNav = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, isOpen, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isTransparent = transparentNav && !scrolled;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-background/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="section-padding">
          <div className="container-max flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span
                className={`serif-heading text-2xl lg:text-3xl tracking-[0.2em] font-medium transition-colors duration-500 ${
                  isTransparent ? 'text-white' : 'text-foreground'
                }`}
              >
                VELMORA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-primary ${
                    isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                className={`p-2 transition-colors duration-300 hover:text-primary ${
                  isTransparent ? 'text-white' : 'text-foreground'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 hover:text-primary ${
                  isTransparent ? 'text-white' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${isTransparent ? 'text-white' : 'text-foreground'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${isTransparent ? 'text-white' : 'text-foreground'}`} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="section-padding py-6 space-y-4">
              {['Shop', 'Collections', 'About', 'Journal'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Shop' ? '/shop' : item === 'Collections' ? '/shop' : '/'}
                  className="block text-sm tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
}
