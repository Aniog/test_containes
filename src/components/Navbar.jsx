import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalCount, setIsOpen } = useCart();
  const { pathname } = useLocation();
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        overHero
          ? 'bg-transparent py-5'
          : 'bg-paper/95 py-3 shadow-sm backdrop-blur-sm'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button
              aria-label="Open menu"
              className={cn(
                'p-2 transition-colors',
                overHero ? 'text-white' : 'text-espresso'
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-paper p-0">
            <div className="flex h-full flex-col p-8">
              <div className="mb-10 font-cormorant text-2xl font-bold uppercase tracking-[0.2em] text-espresso">
                Velmora
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-espresso hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'font-cormorant text-xl font-bold uppercase tracking-[0.25em] transition-colors md:text-2xl',
            overHero ? 'text-white' : 'text-espresso'
          )}
        >
          Velmora
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                'font-sans text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold',
                overHero ? 'text-white/90 hover:text-white' : 'text-espresso'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            aria-label="Search"
            className={cn(
              'p-2 transition-colors',
              overHero ? 'text-white hover:text-gold' : 'text-espresso hover:text-gold'
            )}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            onClick={() => setIsOpen(true)}
            className={cn(
              'relative p-2 transition-colors',
              overHero ? 'text-white hover:text-gold' : 'text-espresso hover:text-gold'
            )}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
