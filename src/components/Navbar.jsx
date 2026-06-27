import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const navClasses = scrolled
    ? 'bg-white/95 backdrop-blur-md border-b border-velmora-border shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-md border-b border-velmora-border';

  const textColor = !scrolled && isHome ? 'text-white' : 'text-velmora-text';
  const iconColor = !scrolled && isHome ? 'text-white' : 'text-velmora-text';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${navClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`w-5 h-5 ${iconColor}`} />
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-medium ${textColor} transition-colors`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Shop', path: '/shop' },
                { label: 'Collections', path: '/shop' },
                { label: 'About', path: '/about' },
                { label: 'Journal', path: '/journal' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs tracking-[0.15em] uppercase font-medium ${textColor} hover:opacity-70 transition-opacity`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-1.5 hover:opacity-60 transition-opacity ${iconColor}`}
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-1.5 hover:opacity-60 transition-opacity relative ${iconColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-accent text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-velmora-border">
            <span className="font-serif text-xl tracking-[0.2em]">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {[
              { label: 'Shop', path: '/shop' },
              { label: 'Collections', path: '/shop' },
              { label: 'About', path: '/about' },
              { label: 'Journal', path: '/journal' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl tracking-[0.15em] text-velmora-text hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center pt-24 px-4 animate-fade-in">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-5 right-5 p-2"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              className="w-full border-b-2 border-velmora-text bg-transparent font-serif text-2xl md:text-3xl py-3 outline-none placeholder:text-velmora-text-muted/50"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  navigate('/shop');
                  setSearchOpen(false);
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
