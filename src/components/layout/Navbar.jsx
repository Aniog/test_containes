import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-cream/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClass = `text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso-700 hover:text-espresso-900' : 'text-cream/90 hover:text-cream'
  }`;

  const iconClass = `w-4 h-4 transition-colors duration-300 ${
    scrolled || !isHome ? 'text-espresso-700 hover:text-espresso-900' : 'text-cream/90 hover:text-cream'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-espresso-700' : 'text-cream'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-espresso-700' : 'text-cream'}`} />
            )}
          </button>

          {/* Center links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/shop?category=Earrings" className={linkClass}>Earrings</Link>
            <Link to="/shop?category=Necklaces" className={linkClass}>Necklaces</Link>
            <Link to="/shop?category=Huggies" className={linkClass}>Huggies</Link>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`font-serif text-2xl tracking-widest transition-colors duration-300 ${
              scrolled || !isHome ? 'text-espresso-800' : 'text-cream'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="p-1">
              <Search className={iconClass} />
            </button>
            <button
              onClick={toggleCart}
              aria-label="Cart"
              className="p-1 relative"
            >
              <ShoppingBag className={iconClass} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-400 text-espresso-900 text-[10px] font-sans font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-espresso-200/30 bg-cream/95 backdrop-blur-sm pb-6 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              <Link to="/shop" className="text-sm tracking-widest uppercase font-sans font-medium text-espresso-700 py-2">
                Shop All
              </Link>
              <Link to="/shop?category=Earrings" className="text-sm tracking-widest uppercase font-sans font-medium text-espresso-700 py-2">
                Earrings
              </Link>
              <Link to="/shop?category=Necklaces" className="text-sm tracking-widest uppercase font-sans font-medium text-espresso-700 py-2">
                Necklaces
              </Link>
              <Link to="/shop?category=Huggies" className="text-sm tracking-widest uppercase font-sans font-medium text-espresso-700 py-2">
                Huggies
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
