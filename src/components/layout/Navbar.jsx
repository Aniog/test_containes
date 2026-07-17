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
  const { toggleCart, itemCount } = useCart();
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

  const textColor = scrolled || !isHome
    ? 'text-brand-charcoal'
    : 'text-white';
  const hoverColor = scrolled || !isHome
    ? 'hover:text-brand-gold'
    : 'hover:text-brand-gold-light';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
            : isHome
              ? 'bg-transparent'
              : 'bg-brand-cream/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 -ml-2 ${textColor} ${hoverColor} transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop nav links - left */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-[0.15em] uppercase ${textColor} ${hoverColor} transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo - center */}
            <Link
              to="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.2em] ${textColor} ${hoverColor} transition-colors duration-300`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className={`p-2 ${textColor} ${hoverColor} transition-colors duration-300`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={`relative p-2 ${textColor} ${hoverColor} transition-colors duration-300`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-brand-gold text-white text-[10px] font-sans font-semibold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-cream pt-20 md:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`flex flex-col items-center gap-8 pt-12 transition-transform duration-500 ${
          mobileOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-serif text-2xl tracking-[0.15em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
