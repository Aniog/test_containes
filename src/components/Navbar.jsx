import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const { count, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
          transparent
            ? 'bg-transparent border-transparent text-cream'
            : 'bg-cream/95 backdrop-blur border-hairline text-espresso'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="font-serif text-xl lg:text-2xl uppercase tracking-extra-wide"
              aria-label="Velmora Fine Jewelry home"
            >
              Velmora
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-xs uppercase tracking-extra-wide font-medium hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 lg:gap-6">
              <button
                aria-label="Search"
                className="hover:text-gold transition-colors"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                aria-label="Open cart"
                className="relative hover:text-gold transition-colors"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-cream text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {count > 9 ? '9+' : count}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="lg:hidden hover:text-gold transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 pt-16 bg-cream">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-serif text-2xl uppercase tracking-extra-wide text-espresso hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
