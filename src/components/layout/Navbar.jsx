import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-velmora',
        scrolled || !isHome
          ? 'bg-surface/90 backdrop-blur-md border-b border-base/5 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="md:hidden p-2 -ml-2 text-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest-xl text-ink">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=earrings', label: 'Earrings' },
              { to: '/shop?category=necklaces', label: 'Necklaces' },
              { to: '/shop?category=huggies', label: 'Huggies' },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'text-xs tracking-widest-xl uppercase transition-colors duration-300',
                  location.pathname + location.search === item.to
                    ? 'text-gold'
                    : 'text-ink-muted hover:text-gold'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 text-ink hover:text-gold transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-ink hover:text-gold transition-colors relative"
              onClick={toggleDrawer}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-[10px] font-semibold text-base rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-base/5">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=earrings', label: 'Earrings' },
              { to: '/shop?category=necklaces', label: 'Necklaces' },
              { to: '/shop?category=huggies', label: 'Huggies' },
              { to: '/about', label: 'About' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm tracking-widest-xl uppercase text-ink-muted hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
