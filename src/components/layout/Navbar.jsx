import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-velvet-card/95 backdrop-blur-md border-b border-velvet-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-velvet-base hover:text-velvet-accent transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/shop/earrings" className="nav-link">Earrings</Link>
          <Link to="/shop/necklaces" className="nav-link">Necklaces</Link>
          <Link to="/shop/huggies" className="nav-link">Huggies</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Logo — center on mobile, left on desktop */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[.2em] text-velvet-base hover:text-velvet-accent transition-colors absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className="text-velvet-base hover:text-velvet-accent transition-colors" aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={onCartClick}
            className="relative text-velvet-base hover:text-velvet-accent transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-velvet-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 border-b border-velvet-border bg-velvet-card/98 backdrop-blur-md' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-3 px-5 py-5">
          <Link to="/shop" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Shop All</Link>
          <Link to="/shop/earrings" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Earrings</Link>
          <Link to="/shop/necklaces" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Necklaces</Link>
          <Link to="/shop/huggies" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Huggies</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About</Link>
        </div>
      </div>
    </nav>
  );
}
