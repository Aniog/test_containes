import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-noir p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center links - desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
          <Link to="/shop" className="text-warmgray-700 hover:text-noir transition-colors">Shop</Link>
          <Link to="/shop?category=Earrings" className="text-warmgray-700 hover:text-noir transition-colors">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="text-warmgray-700 hover:text-noir transition-colors">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="text-warmgray-700 hover:text-noir transition-colors">Huggies</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-widest absolute left-1/2 -translate-x-1/2"
          style={{ color: scrolled ? '#0d0b0a' : '#faf8f5' }}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block p-2" aria-label="Search">
            <Search className={`w-5 h-5 ${scrolled ? 'text-noir' : 'text-cream'}`} />
          </button>
          <button className="relative p-2" onClick={openCart} aria-label="Cart">
            <ShoppingBag className={`w-5 h-5 ${scrolled ? 'text-noir' : 'text-cream'}`} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-sand-500 text-white text-[10px] font-medium flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-warmgray-100 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            <Link to="/shop" className="text-sm tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop?category=Earrings" className="text-sm tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Earrings</Link>
            <Link to="/shop?category=Necklaces" className="text-sm tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Necklaces</Link>
            <Link to="/shop?category=Huggies" className="text-sm tracking-wider uppercase" onClick={() => setMobileOpen(false)}>Huggies</Link>
          </div>
        </div>
      )}
    </nav>
  );
}