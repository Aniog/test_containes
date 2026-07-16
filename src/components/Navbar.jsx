import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(200,169,110,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 -ml-2"
            aria-label="Open menu"
          >
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? 'bg-soft-black' : 'bg-cream'
              }`}
            />
            <span
              className={`block w-5 h-px transition-all duration-300 ${
                scrolled ? 'bg-soft-black' : 'bg-cream'
              }`}
            />
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase">
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">
              Collections
            </Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.25em]"
            style={{ color: scrolled ? '#2C2C2C' : '#FBF7F0' }}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.15em] uppercase">
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">
              Journal
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button aria-label="Search" className="p-1">
              <Search className="w-4 h-4 md:w-5 md:h-5" style={{ color: scrolled ? '#2C2C2C' : '#FBF7F0' }} />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className="p-1 relative"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" style={{ color: scrolled ? '#2C2C2C' : '#FBF7F0' }} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-[10px] font-medium flex items-center justify-center rounded-full text-cream">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-soft-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-cream shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-serif text-lg tracking-[0.2em] text-soft-black">
              VELMORA
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2">
              <X className="w-5 h-5 text-soft-black" />
            </button>
          </div>
          <div className="flex flex-col px-6 pt-8 gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' || link === 'Collections' ? '/shop' : '/shop'}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-soft-black hover:text-gold transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
