import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop?category=all' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { itemCount, toggleCart } = useCart();
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[var(--z-sticky)]',
          'transition-all duration-500',
          isScrolled || !isHomePage
            ? 'bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-[var(--color-charcoal)]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {/* Logo */}
            <Link 
              to="/" 
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.2em]',
                'transition-colors duration-300',
                isScrolled || !isHomePage
                  ? 'text-[var(--color-charcoal)]'
                  : 'text-white'
              )}
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors duration-200',
                    'relative after:absolute after:bottom-[-4px] after:left-0 after:w-0',
                    'after:h-[1px] after:bg-[var(--color-gold)]',
                    'hover:after:w-full after:transition-all after:duration-300',
                    isScrolled || !isHomePage
                      ? 'text-[var(--color-charcoal)]'
                      : 'text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'p-2 transition-colors duration-200',
                  isScrolled || !isHomePage
                    ? 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
                    : 'text-white hover:text-[var(--color-gold-light)]'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {/* Cart */}
              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 relative transition-colors duration-200',
                  isScrolled || !isHomePage
                    ? 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
                    : 'text-white hover:text-[var(--color-gold-light)]'
                )}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--color-gold)] text-[var(--color-rich-black)] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
        
        {/* Search Bar */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300',
            isSearchOpen ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container pb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-taupe)]" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className={cn(
                  'w-full pl-10 pr-4 py-3',
                  'bg-[var(--color-ivory)] border-none rounded-sm',
                  'text-[var(--color-charcoal)] placeholder:text-[var(--color-taupe)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]'
                )}
                autoFocus={isSearchOpen}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-modal)] bg-[var(--color-rich-black)]/50',
          'transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] z-[var(--z-modal)]',
          'bg-[var(--color-cream)]',
          'transform transition-transform duration-300 ease-out',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-sand)]">
          <span 
            className="font-serif text-xl tracking-[0.2em]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            VELMORA
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-[var(--color-charcoal)]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-lg text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <hr className="my-8 border-[var(--color-sand)]" />
          
          <div className="space-y-4">
            <button className="flex items-center gap-3 text-[var(--color-warm-gray)] hover:text-[var(--color-gold)]">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
