import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
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

  const navBg = isHome
    ? scrolled
      ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
    : 'bg-cream-50/95 backdrop-blur-md shadow-sm';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-ink-900';

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury',
          navBg
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl sm:text-2xl font-semibold tracking-widest transition-colors duration-500',
                textColor
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Links */}
            <div
              className={cn(
                'hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium transition-colors duration-500',
                textColor
              )}
            >
              <Link to="/shop" className="hover:text-gold-500 transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="hover:text-gold-500 transition-colors">
                Collections
              </Link>
              <Link to="/" className="hover:text-gold-500 transition-colors">
                About
              </Link>
              <Link to="/" className="hover:text-gold-500 transition-colors">
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={cn(
                  'p-1.5 hover:text-gold-500 transition-colors duration-300',
                  textColor
                )}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'relative p-1.5 hover:text-gold-500 transition-colors duration-300',
                  textColor
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 text-[10px] font-medium text-white">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'md:hidden p-1.5 hover:text-gold-500 transition-colors duration-300',
                  textColor
                )}
                aria-label="Menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream-50">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-serif text-xl font-semibold tracking-widest text-ink-900">
              VELMORA
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close">
              <X size={24} className="text-ink-900" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-12 text-lg tracking-widest uppercase font-serif">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-ink-900 hover:text-gold-500 transition-colors">
              Shop
            </Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-ink-900 hover:text-gold-500 transition-colors">
              Collections
            </Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-ink-900 hover:text-gold-500 transition-colors">
              About
            </Link>
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-ink-900 hover:text-gold-500 transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
