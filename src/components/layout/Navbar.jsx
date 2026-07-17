import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 -ml-2 text-deepbrown"
          aria-label="Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center links (desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase font-sans font-medium">
          <Link to="/shop" className={`hover:text-gold transition-colors ${scrolled ? 'text-mocha' : 'text-deepbrown'}`}>Shop</Link>
          <Link to="/shop" className={`hover:text-gold transition-colors ${scrolled ? 'text-mocha' : 'text-deepbrown'}`}>Collections</Link>
          <Link to="/shop" className={`hover:text-gold transition-colors ${scrolled ? 'text-mocha' : 'text-deepbrown'}`}>About</Link>
          <Link to="/shop" className={`hover:text-gold transition-colors ${scrolled ? 'text-mocha' : 'text-deepbrown'}`}>Journal</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] font-semibold tracking-[0.15em] text-deepbrown"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-5">
          <button className="p-2 -mr-2 text-deepbrown hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button onClick={openCart} className="p-2 -mr-2 text-deepbrown hover:text-gold transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-gold text-[10px] font-sans font-semibold text-white flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile slide-out */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deepbrown/40" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-cream shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-xl font-semibold tracking-[0.15em] text-deepbrown">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-deepbrown">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col px-6 pt-4 gap-1">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className="py-3 font-sans text-sm tracking-widest uppercase text-mocha border-b border-sand/30 hover:text-gold transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
