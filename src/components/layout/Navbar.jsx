import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

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
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-velmora-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(61,55,51,0.12)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] uppercase font-light transition-colors ${
                isTransparent ? 'text-velmora-cream' : 'text-velmora-obsidian'
              }`}
            >
              Velmora
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors hover:text-velmora-gold ${
                    isTransparent ? 'text-velmora-cream/90' : 'text-velmora-text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex items-center justify-center w-9 h-9 transition-colors hover:text-velmora-gold ${
                  isTransparent ? 'text-velmora-cream/90' : 'text-velmora-text-dark'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`relative flex items-center justify-center w-9 h-9 transition-colors hover:text-velmora-gold ${
                  isTransparent ? 'text-velmora-cream/90' : 'text-velmora-text-dark'
                }`}
                aria-label={`Cart, ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-velmora-obsidian text-[10px] font-sans font-bold rounded-full flex items-center justify-center leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden flex items-center justify-center w-9 h-9 transition-colors ${
                  isTransparent ? 'text-velmora-cream/90' : 'text-velmora-text-dark'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-velmora-cream flex flex-col pt-16 transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col px-8 py-10 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-serif text-3xl text-velmora-text-dark hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-6 border-t border-velmora-sand/60">
            <button className="flex items-center gap-3 font-sans text-sm text-velmora-text-muted hover:text-velmora-text-dark transition-colors">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
