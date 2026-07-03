import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount, toggleCart } = useCart();

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
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
    { href: '/collection', label: 'Shop' },
    { href: '/collection?category=earrings', label: 'Earrings' },
    { href: '/collection?category=necklaces', label: 'Necklaces' },
    { href: '/collection?category=huggies', label: 'Huggies' },
    { href: '/#about', label: 'About' },
  ];

  const textColor = isTransparent ? 'text-white' : 'text-velmora-espresso';
  const logoColor = isTransparent ? 'text-white' : 'text-velmora-espresso';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-velmora-cream shadow-soft'
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'lg:hidden p-2 -ml-2 transition-colors hover:text-velmora-gold',
                textColor
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl tracking-ultra-wide absolute left-1/2 -translate-x-1/2 transition-colors',
                logoColor
              )}
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors hover:text-velmora-gold link-underline',
                    textColor
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-2 transition-colors hover:text-velmora-gold',
                  textColor
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 transition-colors hover:text-velmora-gold relative',
                  textColor
                )}
                aria-label={`Cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-velmora-charcoal/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 right-0 bottom-0 w-[300px] bg-velmora-cream shadow-lift transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span
                className="font-serif text-xl tracking-ultra-wide"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                VELMORA
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-velmora-espresso hover:text-velmora-gold"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-lg tracking-wide text-velmora-espresso hover:text-velmora-gold transition-colors animate-fade-up',
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hairline my-8" />

            <div className="text-sm text-velmora-warm-gray">
              <p className="mb-2">About</p>
              <p className="mb-2">Journal</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
