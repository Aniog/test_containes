import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { href: '/collections/all', label: 'Shop' },
    { href: '/collections/earrings', label: 'Earrings' },
    { href: '/collections/necklaces', label: 'Necklaces' },
    { href: '/collections/huggies', label: 'Huggies' },
  ];
  
  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          isScrolled || !isHomePage
            ? 'bg-background/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 text-text-primary"
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
              className={cn(
                'font-serif text-2xl tracking-[0.2em] transition-colors',
                isScrolled || !isHomePage ? 'text-text-primary' : 'text-white'
              )}
            >
              VELMORA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors relative group',
                    isScrolled || !isHomePage
                      ? 'text-text-primary'
                      : 'text-white',
                    'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px',
                    'after:bg-current after:transition-all after:duration-300',
                    'hover:after:w-full'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors',
                  isScrolled || !isHomePage
                    ? 'text-text-primary hover:text-accent'
                    : 'text-white hover:text-accent'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={openCart}
                className={cn(
                  'p-2 transition-colors relative',
                  isScrolled || !isHomePage
                    ? 'text-text-primary hover:text-accent'
                    : 'text-white hover:text-accent'
                )}
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-background shadow-xl animate-slide-in-right">
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-xl font-serif text-text-primary hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto pt-8 border-t border-border">
                <Link
                  to="/about"
                  className="block text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/journal"
                  className="block text-text-secondary hover:text-text-primary transition-colors mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Journal
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
