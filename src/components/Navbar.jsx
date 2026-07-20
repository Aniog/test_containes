import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg =
    !isHome || scrolled
      ? 'bg-velmora-cream/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent';
  const textColor =
    !isHome || scrolled ? 'text-velmora-charcoal' : 'text-velmora-cream';

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-velmora ${navBg}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            to="/"
            className={`font-serif text-xl font-medium tracking-ultra transition-colors ${textColor}`}
          >
            VELMORA
          </Link>

          <div className={`hidden items-center gap-8 md:flex ${textColor}`}>
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop', label: 'Collections' },
              { to: '/#story', label: 'About' },
              { to: '/#journal', label: 'Journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="relative font-sans text-xs uppercase tracking-widest transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={`flex items-center gap-5 ${textColor}`}>
            <button
              aria-label="Search"
              className="transition-opacity hover:opacity-70"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cart"
              className="relative transition-opacity hover:opacity-70"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-medium text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              className="transition-opacity hover:opacity-70 md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-cream transition-transform duration-500 ease-velmora md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="font-serif text-xl font-medium tracking-ultra text-velmora-charcoal">
            VELMORA
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close">
            <X size={24} strokeWidth={1.5} className="text-velmora-charcoal" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 pt-12">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop', label: 'Collections' },
            { to: '/#story', label: 'About' },
            { to: '/#journal', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-serif text-2xl text-velmora-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}