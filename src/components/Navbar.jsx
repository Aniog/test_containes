import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !mobileOpen;

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent text-white'
          : 'bg-cream/95 backdrop-blur text-charcoal shadow-sm'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-widest font-medium"
        >
          VELMORA
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <button
            aria-label="Search"
            className="hover:opacity-70 transition-opacity"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Cart"
            onClick={toggleCart}
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur border-t hairline px-5 pb-6 pt-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium tracking-wide uppercase text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
