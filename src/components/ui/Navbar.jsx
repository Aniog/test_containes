import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '#story' },
  { label: 'Journal', href: '#' },
];

export function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out-lux ${
          scrolled
            ? 'bg-velmora-cream/95 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a
            href="/"
            className={`font-serif text-xl font-semibold uppercase tracking-widest transition-colors duration-300 ${
              scrolled ? 'text-velmora-espresso' : 'text-white'
            }`}
          >
            Velmora
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-display text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-velmora-gold ${
                  scrolled ? 'text-velmora-espresso' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className={`transition-colors duration-300 ${
                scrolled ? 'text-velmora-espresso' : 'text-white'
              }`}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              aria-label="Open cart"
              className={`relative transition-colors duration-300 ${
                scrolled ? 'text-velmora-espresso' : 'text-white'
              }`}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] font-semibold text-velmora-espresso">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`transition-colors duration-300 md:hidden ${
                scrolled ? 'text-velmora-espresso' : 'text-white'
              }`}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-espresso transition-transform duration-500 ease-out-lux ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl font-semibold uppercase tracking-widest text-velmora-cream">
              Velmora
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-velmora-cream"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl font-light text-velmora-cream transition-colors hover:text-velmora-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
