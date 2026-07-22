import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/collection', label: 'Shop' },
    { href: '/collection?category=earrings', label: 'Earrings' },
    { href: '/collection?category=necklaces', label: 'Necklaces' },
    { href: '/collection?category=huggies', label: 'Huggies' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || !isHomePage
            ? 'bg-brand-bg-primary/95 backdrop-blur-md border-b border-brand-border-subtle'
            : 'bg-transparent'
        )}
      >
        <nav className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-brand-text-primary hover:text-brand-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-[0.15em] text-brand-text-primary hover:text-brand-gold transition-colors"
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-sm font-medium tracking-wide text-brand-text-secondary hover:text-brand-gold transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-text-primary hover:text-brand-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={openCart}
                className="relative p-2 text-brand-text-primary hover:text-brand-gold transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-brand-gold text-brand-bg-primary text-[10px] font-medium rounded-full">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-brand-bg-secondary transform transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-brand-border-subtle">
            <span className="font-serif text-xl tracking-[0.15em]">VELMORA</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-brand-text-primary hover:text-brand-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-lg font-medium text-brand-text-primary hover:text-brand-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] transition-opacity duration-300',
          isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        />
        <div className="container-main py-32">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-secondary" />
              <input
                type="text"
                placeholder="Search for jewelry..."
                autoFocus={isSearchOpen}
                className="w-full pl-12 pr-4 py-4 bg-brand-bg-secondary border border-brand-border-subtle text-brand-text-primary placeholder:text-brand-text-tertiary focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-brand-text-secondary hover:text-brand-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-brand-text-secondary">
              Press ESC to close
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
