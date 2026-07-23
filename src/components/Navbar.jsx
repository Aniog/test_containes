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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const bgClass = scrolled || !isHome
    ? 'bg-surface/95 backdrop-blur-sm border-b border-hairline'
    : 'bg-transparent border-b border-transparent';

  const textClass = scrolled || !isHome ? 'text-text-primary' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      >
        <div className="max-w-container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className={`md:hidden ${textClass}`}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-widest uppercase ${textClass}`}
            >
              Velmora
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'Shop', to: '/shop' },
                { label: 'Collections', to: '/shop' },
                { label: 'About', to: '/about' },
                { label: 'Journal', to: '/journal' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs uppercase tracking-label font-medium hover:opacity-70 transition-opacity ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className={`${textClass} hover:opacity-70 transition-opacity`}>
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className={`relative ${textClass} hover:opacity-70 transition-opacity`}
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-sans font-semibold w-4.5 h-4.5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-surface">
          <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
            <span className="font-serif text-xl tracking-widest uppercase text-text-primary">
              Velmora
            </span>
            <button onClick={() => setMobileOpen(false)}>
              <X size={22} className="text-text-primary" />
            </button>
          </div>
          <div className="flex flex-col gap-8 px-6 py-10">
            {[
              { label: 'Shop', to: '/shop' },
              { label: 'Collections', to: '/shop' },
              { label: 'About', to: '/about' },
              { label: 'Journal', to: '/journal' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-serif text-2xl text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
