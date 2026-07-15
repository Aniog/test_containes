import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || !isHomePage
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl tracking-ultra-wide transition-colors duration-300',
                isScrolled || !isHomePage ? 'text-charcoal' : 'text-charcoal'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 4).map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-sans text-sm tracking-wide text-charcoal/80 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-charcoal hover:text-gold transition-colors duration-300 hidden md:block"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-charcoal hover:text-gold transition-colors duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ivory shadow-xl animate-slideIn">
            <div className="flex items-center justify-between p-4 border-b border-sand">
              <span className="font-serif text-xl tracking-ultra-wide text-charcoal">
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-sans text-lg text-charcoal hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
