import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartDispatch } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cart = useCart();
  const { openCart } = useCartDispatch();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileMenuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isTransparent
      ? 'bg-transparent text-white'
      : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-black border-b border-velmora-sand/60 shadow-sm'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.15em] uppercase font-medium">
            <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
            <Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link>
            <Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-[0.2em] font-semibold"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              className="p-2 hover:text-velmora-gold transition-colors hidden md:block"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="p-2 hover:text-velmora-gold transition-colors relative"
              onClick={openCart}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-velmora-gold text-white text-[10px] font-sans rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-velmora-cream border-t border-velmora-sand/40 space-y-4">
          <Link to="/shop" className="block text-sm tracking-[0.15em] uppercase py-2">Shop All</Link>
          <Link to="/shop?category=Earrings" className="block text-sm tracking-[0.15em] uppercase py-2">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="block text-sm tracking-[0.15em] uppercase py-2">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="block text-sm tracking-[0.15em] uppercase py-2">Huggies</Link>
        </div>
      </div>
    </nav>
  );
}
