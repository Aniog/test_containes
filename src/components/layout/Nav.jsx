import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-ivory shadow-[0_1px_0_#C4B5A5]';

  // Explicit color values so the transparent-over-hero state is always ivory
  // regardless of any CSS cascade from :root
  const textStyle = isHome && !scrolled
    ? { color: '#FAF7F2' }
    : { color: '#1C1410' };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] uppercase transition-colors duration-400"
              style={textStyle}
            >
              Velmora
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="font-sans text-xs uppercase tracking-[0.12em] transition-colors duration-300 hover:text-gold"
                  style={textStyle}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                aria-label="Search"
                className="transition-colors duration-300 hover:text-gold"
                style={textStyle}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label={`Cart (${totalItems} items)`}
                onClick={() => setIsOpen(true)}
                className="relative transition-colors duration-300 hover:text-gold"
                style={textStyle}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-espresso text-[9px] font-sans font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                className="md:hidden transition-colors duration-300 hover:text-gold"
                style={textStyle}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory flex flex-col pt-20 px-8 transition-transform duration-400 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 mt-8">
          {[
            { label: 'Shop', to: '/shop' },
            { label: 'Collections', to: '/shop' },
            { label: 'About', to: '/about' },
            { label: 'Journal', to: '/journal' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="font-serif text-3xl font-light text-espresso tracking-wide"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-auto pb-12 border-t border-stone-light pt-8">
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-stone">
            Free Worldwide Shipping · 30-Day Returns
          </p>
        </div>
      </div>
    </>
  );
}
