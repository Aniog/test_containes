import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';
  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl tracking-superwide font-semibold ${textColor}`}>
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/shop" className={`text-xs tracking-widest uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}>
                Shop
              </Link>
              <Link to="/shop?category=earrings" className={`text-xs tracking-widest uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}>
                Collections
              </Link>
              <Link to="/#story" className={`text-xs tracking-widest uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}>
                About
              </Link>
              <Link to="/" className={`text-xs tracking-widest uppercase font-medium hover:opacity-60 transition-opacity ${textColor}`}>
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className={`p-2 hover:opacity-60 transition-opacity ${textColor}`} aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className={`p-2 hover:opacity-60 transition-opacity relative ${textColor}`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-cream border-t border-sand">
            <div className="px-4 py-6 space-y-4">
              <Link to="/shop" className="block text-sm tracking-widest uppercase font-medium text-charcoal">Shop</Link>
              <Link to="/shop?category=earrings" className="block text-sm tracking-widest uppercase font-medium text-charcoal">Collections</Link>
              <Link to="/#story" className="block text-sm tracking-widest uppercase font-medium text-charcoal">About</Link>
              <Link to="/" className="block text-sm tracking-widest uppercase font-medium text-charcoal">Journal</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}