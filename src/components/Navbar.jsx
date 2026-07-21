import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navBg = scrolled
    ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
    : isHome
    ? 'bg-transparent'
    : 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm';

  const textColor = !scrolled && isHome ? 'text-white' : 'text-velmora-charcoal';

  const linkHover = !scrolled && isHome
    ? 'hover:text-velmora-gold-light'
    : 'hover:text-velmora-gold';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor} ${linkHover} transition-colors`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-medium tracking-ultra-wide ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center nav links — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-sans font-medium uppercase tracking-[0.15em] ${textColor} ${linkHover} transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-5">
              <button
                className={`${textColor} ${linkHover} transition-colors`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`relative ${textColor} ${linkHover} transition-colors`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-charcoal">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-velmora-cream">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="font-serif text-xl font-medium tracking-ultra-wide text-velmora-charcoal">
              VELMORA
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-velmora-charcoal"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-12">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl text-velmora-charcoal hover:text-velmora-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
