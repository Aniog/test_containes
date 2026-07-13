import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navLinks = [
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

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-linen shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif font-medium text-xl md:text-2xl tracking-widest uppercase transition-colors duration-300 ${
              transparent ? 'text-ivory' : 'text-espresso'
            }`}
          >
            Velmora
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs font-medium uppercase tracking-widest transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory/90' : 'text-taupe'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`hidden md:flex transition-colors duration-300 hover:text-gold ${
                transparent ? 'text-ivory/90' : 'text-taupe'
              }`}
            >
              <Search size={18} />
            </button>
            <button
              aria-label={`Cart (${totalItems} items)`}
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-300 hover:text-gold ${
                transparent ? 'text-ivory/90' : 'text-taupe'
              }`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-espresso text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden transition-colors duration-300 ${
                transparent ? 'text-ivory/90' : 'text-taupe'
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-linen px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm font-medium uppercase tracking-widest text-espresso hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
