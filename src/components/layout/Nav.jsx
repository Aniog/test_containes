import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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

  const isTransparent = isHomePage && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm border-b border-linen shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl tracking-widest font-light transition-colors duration-300 ${
                isTransparent ? 'text-ivory' : 'text-ink'
              }`}
            >
              VELMORA
            </Link>

            {/* Center nav links — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-inter text-xs tracking-widest uppercase transition-colors duration-200 hover:text-gold ${
                    isTransparent ? 'text-ivory/90' : 'text-stone'
                  } ${location.pathname === link.to ? 'text-gold' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`transition-colors duration-200 hover:text-gold ${isTransparent ? 'text-ivory' : 'text-stone'}`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${isTransparent ? 'text-ivory' : 'text-stone'}`}
                aria-label={`Cart, ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-cream text-[9px] font-inter font-medium rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden transition-colors duration-200 hover:text-gold ${isTransparent ? 'text-ivory' : 'text-stone'}`}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4 border-t border-linen/50 pt-3">
              <input
                type="text"
                placeholder="Search jewelry..."
                autoFocus
                className="w-full bg-transparent border-b border-linen pb-2 font-inter text-sm text-ink placeholder:text-dust focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-linen">
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-inter text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="hairline mt-2 pt-4">
                <Link
                  to="/shop"
                  className="block w-full text-center bg-gold text-cream py-3 font-inter text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
