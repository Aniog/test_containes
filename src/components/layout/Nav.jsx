import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { name: 'Shop', href: '/collection' },
    { name: 'Collections', href: '/collection' },
    { name: 'About', href: '/about' },
    { name: 'Journal', href: '/journal' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isHomePage && !isScrolled
            ? 'bg-transparent text-white'
            : 'bg-cream text-espresso border-b border-linen'
        )}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'lg:hidden p-2 -ml-2 transition-colors',
                (isHomePage && !isScrolled) ? 'text-white' : 'text-espresso'
              )}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-[0.2em] transition-colors',
                (isHomePage && !isScrolled) ? 'text-white' : 'text-espresso'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'relative text-sm tracking-wide transition-colors group',
                    (isHomePage && !isScrolled) ? 'text-white' : 'text-espresso',
                    'hover:text-gold'
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors',
                  (isHomePage && !isScrolled) ? 'text-white' : 'text-espresso',
                  'hover:text-gold'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-2 transition-colors',
                  (isHomePage && !isScrolled) ? 'text-white' : 'text-espresso',
                  'hover:text-gold'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-white text-xs font-medium rounded-full flex items-center justify-center animate-bounce-soft">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-cream transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8 border-b border-linen">
            <span className="font-serif text-xl tracking-[0.2em] text-espresso">
              VELMORA
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-espresso hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center gap-8 px-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-3xl tracking-wide text-espresso hover:text-gold transition-colors"
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
                  animation: isMobileMenuOpen ? 'fadeUp 0.6s ease-out forwards' : 'none',
                  opacity: 0,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
