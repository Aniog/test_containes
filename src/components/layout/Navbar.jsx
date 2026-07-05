import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setDrawerOpen } = useCart();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -ml-2 text-oxford"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center links - desktop */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              <Link to="/shop/Earrings" className="text-sm font-medium text-mocha hover:text-oxford transition-colors duration-300">Earrings</Link>
              <Link to="/shop/Necklaces" className="text-sm font-medium text-mocha hover:text-oxford transition-colors duration-300">Necklaces</Link>
              <Link to="/shop/Huggies" className="text-sm font-medium text-mocha hover:text-oxford transition-colors duration-300">Huggies</Link>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-xl lg:text-2xl tracking-[0.2em] text-oxford hover:text-bronze transition-colors duration-300"
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-3 lg:gap-5">
              <button className="p-2 text-mocha hover:text-oxford transition-colors duration-300" aria-label="Search">
                <Search className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button
                className="relative p-2 text-mocha hover:text-oxford transition-colors duration-300"
                onClick={() => setDrawerOpen(true)}
                aria-label={`Cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-[18px] h-[18px] text-[10px] font-semibold text-cream bg-bronze rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-oxford/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-cream shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-lg tracking-[0.15em] text-oxford">VELMORA</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-mocha" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col px-6 pt-2 gap-1">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-oxford border-b border-sand/50">Shop All</Link>
            <Link to="/shop/Earrings" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-oxford border-b border-sand/50">Earrings</Link>
            <Link to="/shop/Necklaces" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-oxford border-b border-sand/50">Necklaces</Link>
            <Link to="/shop/Huggies" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-oxford border-b border-sand/50">Huggies</Link>
            <Link to="/shop/Sets" onClick={() => setMobileOpen(false)} className="py-3 text-sm font-medium text-oxford border-b border-sand/50">Gift Sets</Link>
          </div>
        </div>
      </div>
    </>
  );
}
