import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out ${
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-cream/95 backdrop-blur-md text-velmora-deep shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Center nav links (desktop) */}
            <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium">
              <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
              <Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Collections</Link>
              <Link to="/about" className="hover:text-velmora-gold transition-colors">About</Link>
              <Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.25em] font-semibold"
            >
              VELMORA
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 hover:text-velmora-gold transition-colors" aria-label="Search">
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                className="p-2 hover:text-velmora-gold transition-colors relative"
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-velmora-line/30 animate-fade-in">
              <div className="flex flex-col py-6 gap-5 text-sm tracking-wider uppercase font-medium text-center">
                <Link to="/shop">Shop</Link>
                <Link to="/shop?category=Earrings">Collections</Link>
                <Link to="/about">About</Link>
                <Link to="/journal">Journal</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
