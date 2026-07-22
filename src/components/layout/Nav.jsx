import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/#story' },
    { label: 'Journal', to: '/' },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-400',
        isTransparent
          ? 'bg-transparent'
          : 'bg-white-warm/95 backdrop-blur-sm shadow-sm shadow-charcoal/5 border-b border-divider'
      )}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={cn(
                'font-serif text-xl md:text-2xl tracking-widest transition-colors duration-300',
                isTransparent ? 'text-white-warm' : 'text-charcoal'
              )}>
                VELMORA
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    'font-sans text-xs tracking-widest uppercase transition-colors duration-200',
                    isTransparent
                      ? 'text-white-warm/80 hover:text-white-warm'
                      : 'text-muted-warm hover:text-gold'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className={cn(
                'transition-colors duration-200 hidden md:block',
                isTransparent ? 'text-white-warm/80 hover:text-white-warm' : 'text-muted-warm hover:text-gold'
              )}>
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  'relative transition-colors duration-200',
                  isTransparent ? 'text-white-warm/80 hover:text-white-warm' : 'text-muted-warm hover:text-gold'
                )}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-white-warm text-xs rounded-full flex items-center justify-center font-sans leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                className={cn(
                  'md:hidden transition-colors duration-200',
                  isTransparent ? 'text-white-warm/80 hover:text-white-warm' : 'text-muted-warm hover:text-gold'
                )}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-white-warm border-t border-divider',
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="block font-sans text-xs tracking-widest uppercase text-muted-warm hover:text-gold transition-colors duration-200 py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
