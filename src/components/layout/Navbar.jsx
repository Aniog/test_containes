import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(201,169,110,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-12 h-16 md:h-20 max-w-[1440px] mx-auto">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-velmora-charcoal hover:text-velmora-gold transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-smoke hover:text-velmora-gold transition-colors font-medium">
            Shop
          </Link>
          <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-smoke hover:text-velmora-gold transition-colors font-medium">
            Collections
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-[28px] tracking-[0.3em] transition-all duration-500 ${
            scrolled ? 'text-velmora-ink' : 'text-white drop-shadow-lg'
          }`}
        >
          VELMORA
        </Link>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-smoke hover:text-velmora-gold transition-colors font-medium">
            About
          </Link>
          <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-smoke hover:text-velmora-gold transition-colors font-medium">
            Journal
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            className={`transition-colors ${scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-white/90 hover:text-white'}`}
            aria-label="Search"
          >
            <Search size={19} />
          </button>
          <button
            onClick={openCart}
            className={`relative transition-colors ${scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-white/90 hover:text-white'}`}
            aria-label="Cart"
          >
            <ShoppingBag size={19} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-velmora-cream border-t border-velmora-sand/50 animate-fade-in">
          <div className="flex flex-col py-6 px-6 gap-5">
            <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-charcoal font-medium" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-charcoal font-medium" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-charcoal font-medium" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/shop" className="text-sm tracking-[0.15em] uppercase text-velmora-charcoal font-medium" onClick={() => setMobileOpen(false)}>Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
