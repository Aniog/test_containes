import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
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

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm border-b border-linen shadow-card';

  const textColor = isHome && !scrolled ? 'text-ivory' : 'text-ink';
  const logoColor = isHome && !scrolled ? 'text-ivory' : 'text-ink';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-300 ${logoColor} hover:text-gold`}>
              Velmora
            </Link>

            {/* Center nav links — desktop */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${textColor} hover:text-gold`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex items-center justify-center w-8 h-8 transition-colors duration-200 ${textColor} hover:text-gold`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className={`relative flex items-center justify-center w-8 h-8 transition-colors duration-200 ${textColor} hover:text-gold`}
                aria-label={`Cart, ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-obsidian text-[10px] font-bold font-sans rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden flex items-center justify-center w-8 h-8 transition-colors duration-200 ${textColor} hover:text-gold`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-30 bg-cream flex flex-col pt-20 px-8 transition-transform duration-300 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="space-y-6 mt-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-serif text-3xl text-ink hover:text-gold transition-colors duration-200 block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-12 border-t border-linen pt-8">
          <p className="font-sans text-xs text-ink-faint uppercase tracking-widest">Free Worldwide Shipping · 30-Day Returns</p>
        </div>
      </div>
    </>
  );
}
