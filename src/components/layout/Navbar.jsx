import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
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

  const navBg = scrolled || !isHome
    ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-velmora-charcoal'
    : 'text-white';

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`sm:hidden p-2 ${textColor} transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl sm:text-2xl font-semibold tracking-[0.25em] ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Center links */}
            <div className="hidden sm:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] tracking-[0.15em] uppercase font-medium ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity`}
                aria-label="Search"
              >
                <Search size={19} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 ${textColor} hover:opacity-70 transition-opacity relative`}
                aria-label="Cart"
              >
                <ShoppingBag size={19} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] font-semibold w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-velmora-cream shadow-lg">
            <div className="px-6 py-8 space-y-6">
              {links.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm tracking-[0.15em] uppercase font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
