import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartActions } from '@/lib/cart';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cart = useCart();
  const { toggleCart } = useCartActions();
  const location = useLocation();

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 text-velmora-espresso"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center links - desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium tracking-widest uppercase">
            <Link
              to="/shop"
              className={`transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-velmora-espresso hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/shop?category=Earrings"
              className={`transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-velmora-espresso hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Collections
            </Link>
            <Link
              to="/"
              className={`transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-velmora-espresso hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/"
              className={`transition-colors duration-300 ${
                scrolled || !isHome
                  ? 'text-velmora-espresso hover:text-velmora-gold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Journal
            </Link>
          </nav>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-[0.15em] font-medium transition-colors duration-300"
            style={{
              color:
                scrolled || !isHome ? 'var(--color-espresso)' : '#FFFFFF',
            }}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 transition-colors duration-300"
              style={{
                color:
                  scrolled || !isHome
                    ? 'var(--color-espresso)'
                    : '#FFFFFF',
              }}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleCart}
              className="p-2 relative transition-colors duration-300"
              style={{
                color:
                  scrolled || !isHome
                    ? 'var(--color-espresso)'
                    : '#FFFFFF',
              }}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-velmora-sand/30 flex flex-col gap-4 font-sans text-sm tracking-widest uppercase text-velmora-espresso animate-fade-in">
            <Link to="/shop" className="py-2">
              Shop
            </Link>
            <Link to="/shop?category=Earrings" className="py-2">
              Collections
            </Link>
            <Link to="/" className="py-2">
              About
            </Link>
            <Link to="/" className="py-2">
              Journal
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
