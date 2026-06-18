import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=signature' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const isTransparent = transparentOnTop && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        isTransparent
          ? 'bg-transparent text-ivory'
          : 'bg-ivory/95 backdrop-blur-md text-espresso border-b border-stone-warm/40'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Left nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-xs uppercase tracking-eyebrow font-medium hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light"
        >
          VELMORA
        </Link>

        {/* Right nav + icons */}
        <div className="flex items-center gap-5 md:gap-8 flex-1 justify-end">
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.slice(2).map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs uppercase tracking-eyebrow font-medium hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Search"
            className="hover:text-gold transition-colors duration-300"
          >
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-espresso text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-stone-warm/40 animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-eyebrow font-medium text-espresso"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
