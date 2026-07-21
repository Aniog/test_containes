import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Shop', href: '/collection' },
  { name: 'Collections', href: '/collection' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
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
  
  const shouldBeTransparent = isHomePage && !isScrolled;
  
  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          shouldBeTransparent 
            ? 'bg-transparent' 
            : 'bg-[var(--color-bg-primary)] shadow-lg'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-serif text-2xl md:text-[1.75rem] tracking-[0.2em] text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors"
            >
              VELMORA
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative text-sm tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <button 
                className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative"
                aria-label="Shopping cart"
                onClick={toggleCart}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-gold)] text-[var(--color-bg-primary)] text-xs font-medium flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-[var(--color-bg-primary)] transition-transform duration-300 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-2xl font-serif tracking-wider uppercase text-[var(--color-text-primary)] hover:text-[var(--color-gold)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
