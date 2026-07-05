import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(232,221,209,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-cream-100 p-2 -ml-2"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="serif-heading text-xl md:text-2xl text-gold tracking-[0.15em] absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            VELMORA
          </Link>

          {/* Center nav links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/shop" className="text-cream-200/80 hover:text-gold text-xs tracking-[0.08em] uppercase transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop?category=Earrings" className="text-cream-200/80 hover:text-gold text-xs tracking-[0.08em] uppercase transition-colors duration-300">
              Collections
            </Link>
            <Link to="/about" className="text-cream-200/80 hover:text-gold text-xs tracking-[0.08em] uppercase transition-colors duration-300">
              About
            </Link>
            <Link to="/journal" className="text-cream-200/80 hover:text-gold text-xs tracking-[0.08em] uppercase transition-colors duration-300">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-cream-200/80 hover:text-gold transition-colors duration-300" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={openDrawer}
              className="relative text-cream-200/80 hover:text-gold transition-colors duration-300"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-espresso text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-espresso/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
          <div className="relative flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-12">
              <span className="serif-heading text-xl text-gold tracking-[0.15em]">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} className="text-cream-100 p-2" aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-cream-100 text-lg tracking-[0.08em] uppercase">Shop</Link>
              <Link to="/shop?category=Earrings" onClick={() => setMobileOpen(false)} className="text-cream-100 text-lg tracking-[0.08em] uppercase">Collections</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="text-cream-100 text-lg tracking-[0.08em] uppercase">About</Link>
              <Link to="/journal" onClick={() => setMobileOpen(false)} className="text-cream-100 text-lg tracking-[0.08em] uppercase">Journal</Link>
            </div>
            <hr className="hairline-divider my-8" />
            <div className="flex flex-col gap-4">
              <button onClick={() => { setMobileOpen(false); openDrawer(); }} className="text-cream-200/80 text-sm tracking-[0.08em] uppercase flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Cart ({totalItems})
              </button>
              <button className="text-cream-200/80 text-sm tracking-[0.08em] uppercase flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
