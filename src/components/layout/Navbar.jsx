import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?collection=earrings', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/journal', label: 'Journal' },
];

const Navbar = ({ transparentOverHero = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOverHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOverHero]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const solid = scrolled || !transparentOverHero || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-velmora-cream/95 backdrop-blur border-b border-velmora-line text-velmora-ink'
          : 'bg-transparent text-velmora-cream'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          aria-label="Open menu"
          className="md:hidden -ml-2 p-2"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.25em] font-light absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          VELMORA
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.25em] transition-opacity duration-300 hover:opacity-60 ${
                  isActive ? 'opacity-100' : 'opacity-90'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button aria-label="Search" className="hover:opacity-60 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button
            aria-label="Open cart"
            onClick={openCart}
            className="relative hover:opacity-60 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span
                className={`absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center font-medium ${
                  solid ? 'bg-velmora-ink text-velmora-cream' : 'bg-velmora-cream text-velmora-ink'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-velmora-cream border-t border-velmora-line">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-velmora-ink uppercase text-sm tracking-[0.25em]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
