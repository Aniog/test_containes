import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Nav = () => {
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
    { label: 'Collections', to: '/shop' },
    { label: 'About', to: '/about' },
    { label: 'Journal', to: '/journal' },
  ];

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-ivory/95 backdrop-blur-sm border-b border-parchment shadow-sm'
        }`}
        style={{ transition: 'background-color 0.4s ease, box-shadow 0.4s ease' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-cormorant text-xl md:text-2xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${
                isTransparent ? 'text-ivory' : 'text-charcoal'
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
                  className={`font-inter text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:text-gold ${
                    isTransparent ? 'text-ivory/80' : 'text-stone'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`hidden md:flex transition-colors duration-200 hover:text-gold ${
                  isTransparent ? 'text-ivory/80' : 'text-stone'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors duration-200 hover:text-gold ${
                  isTransparent ? 'text-ivory/80' : 'text-stone'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-gold text-ivory text-[9px] font-inter font-medium w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden transition-colors duration-200 ${
                  isTransparent ? 'text-ivory/80' : 'text-stone'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-ivory border-t border-parchment">
            <div className="px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-parchment">
                <button className="flex items-center gap-2 font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors duration-200">
                  <Search className="w-3.5 h-3.5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
