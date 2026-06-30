import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome || mobileOpen
    ? 'bg-cream/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-stone-800'
    : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor} transition-colors`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold ${textColor} transition-colors`}
        >
          VELMORA
        </Link>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/shop"
            className={`text-xs tracking-super-wide uppercase font-medium ${textColor} hover:text-gold transition-colors`}
          >
            Shop
          </Link>
          <Link
            to="/shop"
            className={`text-xs tracking-super-wide uppercase font-medium ${textColor} hover:text-gold transition-colors`}
          >
            Collections
          </Link>
          <Link
            to="/about"
            className={`text-xs tracking-super-wide uppercase font-medium ${textColor} hover:text-gold transition-colors`}
          >
            About
          </Link>
          <Link
            to="/journal"
            className={`text-xs tracking-super-wide uppercase font-medium ${textColor} hover:text-gold transition-colors`}
          >
            Journal
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={`${textColor} hover:text-gold transition-colors`} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={`relative ${textColor} hover:text-gold transition-colors`}
            onClick={toggleCart}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200 px-4 py-6">
          <div className="flex flex-col gap-5">
            <Link
              to="/shop"
              className="text-sm tracking-super-wide uppercase font-medium text-stone-800 hover:text-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="text-sm tracking-super-wide uppercase font-medium text-stone-800 hover:text-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-sm tracking-super-wide uppercase font-medium text-stone-800 hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="text-sm tracking-super-wide uppercase font-medium text-stone-800 hover:text-gold transition-colors"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
