import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textClass = scrolled || !isHome
    ? 'text-velmora-charcoal'
    : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 -ml-2 transition-colors ${textClass}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl font-semibold tracking-widest-xl uppercase transition-colors ${textClass}`}
            >
              Velmora
            </Link>

            {/* Center nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-sans text-xs font-medium tracking-wider uppercase transition-colors hover:opacity-70 ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors hover:opacity-70 ${textClass}`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 transition-colors hover:opacity-70 relative ${textClass}`}
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 md:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-[80vw] max-w-xs bg-velmora-cream shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl font-semibold tracking-widest-xl uppercase text-velmora-charcoal">
                Velmora
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 text-velmora-charcoal"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-sm font-medium tracking-wider uppercase text-velmora-charcoal transition-colors hover:text-velmora-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}