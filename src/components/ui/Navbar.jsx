import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
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

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' }
  ];

  return (
    <>
      <nav 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isHome && !isScrolled ? 'bg-transparent' : 'bg-cream shadow-soft',
          isScrolled && 'bg-cream'
        )}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className={cn(
                'font-serif text-2xl tracking-wider transition-colors duration-300',
                isHome && !isScrolled ? 'text-cream' : 'text-charcoal'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'font-sans text-sm uppercase tracking-widest transition-colors duration-300',
                    isHome && !isScrolled ? 'text-cream/80 hover:text-cream' : 'text-charcoal-light hover:text-charcoal'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button 
                className={cn(
                  'p-2 transition-colors duration-300',
                  isHome && !isScrolled ? 'text-cream hover:text-gold' : 'text-charcoal-light hover:text-charcoal'
                )}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  'p-2 transition-colors duration-300 relative',
                  isHome && !isScrolled ? 'text-cream hover:text-gold' : 'text-charcoal-light hover:text-charcoal'
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal text-xs flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2 md:hidden transition-colors duration-300',
                  isHome && !isScrolled ? 'text-cream' : 'text-charcoal'
                )}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-cream pt-20 px-4 transition-transform duration-300 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-lg uppercase tracking-widest text-charcoal border-b border-border pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}