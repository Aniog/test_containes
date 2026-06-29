import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/collections' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const bgClass = scrolled || !isHome
    ? 'bg-velmora-bg/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-velmora-text"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl tracking-[0.15em] text-velmora-text font-light"
            >
              VELMORA
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[13px] tracking-[0.06em] text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className="text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className="relative text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300"
                onClick={() => setIsOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-velmora-bg text-[9px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-overlay"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 w-72 h-full bg-velmora-bg border-r border-velmora-border transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="pt-20 px-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm tracking-[0.06em] text-velmora-text-muted hover:text-velmora-gold transition-colors"
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
