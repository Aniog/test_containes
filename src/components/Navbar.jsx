import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const links = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const bg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-velvet-100'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-velvet-900' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-velvet-900' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden ${textColor}`}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center links — desktop */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-[13px] tracking-wider uppercase font-medium transition-colors hover:text-gold-500 ${textColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo — center */}
            <Link
              to="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-[22px] tracking-[0.3em] font-semibold transition-colors ${logoColor}`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className={`flex items-center gap-5 ${textColor}`}>
              <button aria-label="Search" className="hover:text-gold-500 transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={openCart}
                className="relative hover:text-gold-500 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold-500 text-white text-[10px] font-semibold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream animate-slide-in-right">
            <div className="flex items-center justify-between p-6">
              <span className="font-serif text-xl tracking-[0.2em] font-semibold text-velvet-900">
                VELMORA
              </span>
              <button onClick={() => setMobileOpen(false)} className="text-velvet-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col px-6 pt-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="py-3 text-sm tracking-wider uppercase text-velvet-700 hover:text-gold-600 transition-colors border-b border-velvet-100"
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
