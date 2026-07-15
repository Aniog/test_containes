import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Journal' },
];

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
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
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-cream-100/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-ink' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${textColor}`} />
              ) : (
                <Menu className={`w-5 h-5 ${textColor}`} />
              )}
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wider ${textColor} hover:opacity-80 transition-opacity`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs tracking-widest uppercase font-sans font-medium ${textColor} hover:opacity-60 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className={`p-1.5 ${textColor} hover:opacity-60 transition-opacity`} aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onCartOpen}
                className={`p-1.5 ${textColor} hover:opacity-60 transition-opacity relative`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-cream-100 transform transition-transform duration-300 ease-out pt-16 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm tracking-widest uppercase font-sans font-medium text-ink hover:opacity-60 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}