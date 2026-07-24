import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navTransparent
            ? 'bg-transparent'
            : 'bg-cream-100/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${navTransparent ? 'text-cream-100' : 'text-charcoal-800'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${navTransparent ? 'text-cream-100' : 'text-charcoal-800'}`} />
            )}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-medium tracking-wider transition-colors ${
              navTransparent ? 'text-cream-100' : 'text-charcoal-800'
            }`}
          >
            VELMORA
          </Link>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/collections', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium tracking-widest-xl uppercase transition-colors hover:opacity-70 ${
                  navTransparent ? 'text-cream-100' : 'text-charcoal-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors hover:opacity-70 ${
                navTransparent ? 'text-cream-100' : 'text-charcoal-700'
              }`}
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5 w-[18px] h-[18px]" />
            </button>
            <button
              className={`p-2 relative transition-colors hover:opacity-70 ${
                navTransparent ? 'text-cream-100' : 'text-charcoal-700'
              }`}
              onClick={() => setIsOpen(true)}
              aria-label={`Cart (${totalItems} items)`}
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-400 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-900/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-cream-100 border-b border-cream-400 animate-slide-down">
            <div className="container-narrow py-6 flex flex-col gap-4">
              {[
                { to: '/shop', label: 'Shop' },
                { to: '/collections', label: 'Collections' },
                { to: '/about', label: 'About' },
                { to: '/journal', label: 'Journal' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium tracking-widest-xl uppercase text-charcoal-700 py-2"
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
