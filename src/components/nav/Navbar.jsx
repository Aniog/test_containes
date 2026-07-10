import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory-100 border-b border-ivory-300 shadow-sm'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-xl md:text-2xl font-light tracking-widest2 uppercase transition-colors duration-500 ${
              transparent ? 'text-ivory-100' : 'text-velvet-900'
            }`}
          >
            Velmora
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-sans text-xs tracking-widest2 uppercase transition-colors duration-300 hover:text-gold ${
                  transparent ? 'text-ivory-200' : 'text-velvet-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className={`transition-colors duration-300 hover:text-gold ${
                transparent ? 'text-ivory-200' : 'text-velvet-900'
              }`}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>

            <button
              aria-label={`Cart (${itemCount} items)`}
              onClick={openCart}
              className={`relative transition-colors duration-300 hover:text-gold ${
                transparent ? 'text-ivory-200' : 'text-velvet-900'
              }`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-velvet-900 text-[9px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden transition-colors duration-300 hover:text-gold ${
                transparent ? 'text-ivory-200' : 'text-velvet-900'
              }`}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } bg-ivory-100 border-t border-ivory-300`}
        >
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-xs tracking-widest2 uppercase text-velvet-900 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
