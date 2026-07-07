import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = location.pathname === '/';
  const navTransparent = isHome && !scrolled && !mobileOpen;

  const links = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navTransparent
            ? 'bg-transparent'
            : 'bg-brand-ivory/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-1 transition-colors ${
                navTransparent ? 'text-brand-ivory' : 'text-brand-charcoal'
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl lg:text-[28px] tracking-[0.15em] font-semibold transition-colors ${
                navTransparent ? 'text-brand-ivory' : 'text-brand-charcoal'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[13px] tracking-[0.15em] uppercase transition-colors hover:opacity-80 ${
                    navTransparent
                      ? 'text-brand-ivory/90'
                      : 'text-brand-charcoal/80'
                  } ${
                    location.pathname === link.to
                      ? 'border-b border-brand-gold pb-0.5'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-1 transition-colors ${
                  navTransparent ? 'text-brand-ivory' : 'text-brand-charcoal'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-1 relative transition-colors ${
                  navTransparent ? 'text-brand-ivory' : 'text-brand-charcoal'
                }`}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-brand-gold text-brand-ivory text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] z-50 bg-brand-ivory shadow-xl transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-xl tracking-[0.15em] font-semibold text-brand-charcoal">
              VELMORA
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-brand-charcoal">
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                  location.pathname === link.to
                    ? 'text-brand-gold'
                    : 'text-brand-charcoal/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
