import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
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

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream/95 backdrop-blur-md';

  const textColor = scrolled || !isHome ? 'text-brand-charcoal' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden ${textColor} transition-colors`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-xs font-sans font-medium tracking-ultra-wide uppercase ${textColor} hover:text-brand-gold transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - always centered */}
            <Link
              to="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl font-semibold tracking-super-wide ${textColor} hover:text-brand-gold transition-colors duration-200`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`${textColor} hover:text-brand-gold transition-colors duration-200`} aria-label="Search">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                className={`relative ${textColor} hover:text-brand-gold transition-colors duration-200`}
                onClick={openCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-brand-gold text-white text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
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
        className={`fixed inset-0 z-40 bg-brand-cream pt-20 px-6 md:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className={`flex flex-col items-center gap-8 pt-8 transition-all duration-300 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-serif text-2xl tracking-super-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
