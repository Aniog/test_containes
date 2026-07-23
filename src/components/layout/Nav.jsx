import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Nav() {
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

  // Always solid on non-home pages
  const solid = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          solid
            ? 'bg-obsidian shadow-md shadow-obsidian/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-cormorant text-xl md:text-2xl tracking-widest font-medium transition-colors duration-300 ${
              solid ? 'text-ivory' : 'text-ivory'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="font-manrope text-xs tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-ivory/80 hover:text-gold transition-colors duration-200 hidden md:block"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className="text-ivory/80 hover:text-gold transition-colors duration-200 relative"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-obsidian text-[10px] font-manrope font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden text-ivory/80 hover:text-gold transition-colors duration-200"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col pt-20 px-8 animate-fadeIn">
          <nav className="flex flex-col gap-6 mt-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-cormorant text-3xl text-ivory/90 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pb-12 border-t border-ivory/10 pt-8">
            <p className="font-manrope text-xs text-ivory/40 tracking-widest uppercase">
              Free Worldwide Shipping · 30-Day Returns
            </p>
          </div>
        </div>
      )}
    </>
  );
}
