import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
];

export default function Navbar() {
  const { totalItems, toggleCart } = useCart();
  const scrolled = useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(200,192,180,0.4)]'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-20 section-pad">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-velmora-black" />
            ) : (
              <Menu className="w-5 h-5 text-velmora-black" />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-[1.75rem] tracking-[0.18em] text-velmora-black font-light uppercase"
          >
            Velmora
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  'font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300',
                  scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-velmora-black hover:text-velmora-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hidden md:block" aria-label="Search">
              <Search className={cn('w-[18px] h-[18px] transition-colors', scrolled ? 'text-velmora-charcoal' : 'text-velmora-black')} />
            </button>
            <button className="p-2 relative" onClick={toggleCart} aria-label="Open cart">
              <ShoppingBag className={cn('w-[18px] h-[18px] transition-colors', scrolled ? 'text-velmora-charcoal' : 'text-velmora-black')} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-velmora-ivory text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
        <div
          className={cn(
            'absolute top-0 left-0 w-[85%] max-w-sm h-full bg-velmora-ivory transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex flex-col h-full p-8">
            <Link to="/" className="font-serif text-xl tracking-[0.18em] text-velmora-black uppercase mb-10">
              Velmora
            </Link>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-sans text-sm uppercase tracking-[0.15em] text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-velmora-mist/40">
              <button className="flex items-center gap-3 text-velmora-stone text-xs uppercase tracking-widest">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
