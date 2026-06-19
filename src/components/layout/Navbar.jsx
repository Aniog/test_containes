import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-20 px-5 md:px-10 lg:px-20">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-charcoal-400" />
            ) : (
              <Menu className="w-5 h-5 text-charcoal-400" />
            )}
          </button>

          {/* Center: Logo on mobile, Nav links on desktop */}
          <div className="flex items-center lg:flex-1">
            <Link to="/" className="lg:hidden">
              <span className="font-serif text-xl tracking-widest-2xl text-charcoal-400 font-semibold">
                VELMORA
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[11px] uppercase tracking-widest-xl font-sans font-medium transition-colors duration-300 ${
                    location.pathname === link.to
                      ? 'text-gold-600'
                      : 'text-charcoal-200 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo centered on desktop */}
          <Link to="/" className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl tracking-widest-2xl text-charcoal-400 font-semibold">
              VELMORA
            </span>
          </Link>

          {/* Right: icons */}
          <div className="flex items-center gap-4">
            <button className="p-2" aria-label="Search">
              <Search className="w-[18px] h-[18px] text-charcoal-200" />
            </button>
            <button
              className="p-2 relative"
              onClick={toggleDrawer}
              aria-label="Cart"
            >
              <ShoppingBag className="w-[18px] h-[18px] text-charcoal-200" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-cream-50 text-[9px] font-medium flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-cream-50 border-t border-cream-200 animate-fade-in">
            <div className="px-5 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-widest-xl font-sans font-medium ${
                    location.pathname === link.to
                      ? 'text-gold-600'
                      : 'text-charcoal-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hairline divider below nav */}
      <div
        className={`fixed top-16 md:top-20 left-0 right-0 z-40 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="h-px bg-cream-300" />
      </div>
    </>
  );
}
