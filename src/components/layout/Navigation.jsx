import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        )}
      >
        <nav className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 hover:bg-warm-cream transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} className={isScrolled || !isHome ? 'text-charcoal' : 'text-white'} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl uppercase tracking-ultra-wide transition-colors',
                isScrolled || !isHome ? 'text-charcoal' : 'text-white'
              )}
            >
              Velmora
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'relative font-sans text-sm uppercase tracking-extra-wide transition-colors group',
                    isScrolled || !isHome
                      ? 'text-charcoal hover:text-gold'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full',
                    isScrolled || !isHome ? 'bg-gold' : 'bg-white'
                  )} />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 hover:bg-warm-cream transition-colors',
                  isScrolled || !isHome ? 'text-charcoal' : 'text-white'
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-2 hover:bg-warm-cream transition-colors',
                  isScrolled || !isHome ? 'text-charcoal' : 'text-white'
                )}
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-xs flex items-center justify-center rounded-full">
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
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm animate-fade-in" />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-light-gray">
              <span className="font-serif text-xl uppercase tracking-ultra-wide">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-warm-cream transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="block font-serif text-2xl uppercase tracking-wide text-charcoal hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
