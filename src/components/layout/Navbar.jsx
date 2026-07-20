import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        transparent
          ? 'bg-transparent'
          : 'bg-ivory/95 backdrop-blur-sm border-b border-border shadow-sm shadow-charcoal/5'
      )}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={cn(
                'font-cormorant font-light text-2xl md:text-3xl tracking-ultra-wide transition-colors duration-300',
                transparent ? 'text-ivory' : 'text-charcoal'
              )}>
                VELMORA
              </span>
            </Link>

            {/* Center nav — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'font-inter text-xs font-medium tracking-widest uppercase transition-colors duration-200',
                    transparent
                      ? 'text-ivory/80 hover:text-ivory'
                      : 'text-taupe hover:text-charcoal'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                aria-label="Search"
                className={cn(
                  'p-1.5 transition-colors duration-200',
                  transparent ? 'text-ivory/80 hover:text-ivory' : 'text-taupe hover:text-charcoal'
                )}
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className={cn(
                  'p-1.5 relative transition-colors duration-200',
                  transparent ? 'text-ivory/80 hover:text-ivory' : 'text-taupe hover:text-charcoal'
                )}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-ivory text-xs font-inter font-medium rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={cn(
                  'md:hidden p-1.5 transition-colors duration-200',
                  transparent ? 'text-ivory/80 hover:text-ivory' : 'text-taupe hover:text-charcoal'
                )}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-border animate-fadeIn">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-inter text-xs font-medium tracking-widest uppercase text-charcoal hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
