import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop?category=all' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
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
  
  const shouldBeTransparent = isHomePage && !isScrolled && !isMobileMenuOpen;
  
  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          shouldBeTransparent
            ? 'bg-transparent'
            : 'bg-white shadow-sm'
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'p-2 md:hidden transition-colors',
                shouldBeTransparent ? 'text-white' : 'text-[var(--color-primary)]'
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors',
                shouldBeTransparent ? 'text-white' : 'text-[var(--color-primary)]'
              )}
            >
              VELMORA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors relative group',
                    shouldBeTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-[var(--color-secondary)] hover:text-[var(--color-primary)]'
                  )}
                >
                  {link.name}
                  <span className={cn(
                    'absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full',
                    shouldBeTransparent ? 'bg-white' : 'bg-[var(--color-accent)]'
                  )} />
                </Link>
              ))}
            </div>
            
            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <button
                className={cn(
                  'p-2 transition-colors',
                  shouldBeTransparent ? 'text-white' : 'text-[var(--color-primary)]'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 relative transition-colors',
                  shouldBeTransparent ? 'text-white' : 'text-[var(--color-primary)]'
                )}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[var(--color-accent)] text-white text-xs font-medium rounded-full">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-white shadow-xl animate-slideInRight">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <span className="font-serif text-xl tracking-[0.15em]">VELMORA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--color-primary)]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-3 text-lg text-[var(--color-primary)] border-b border-[var(--color-border)] last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
