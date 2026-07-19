import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = scrolled ? 'text-espresso/80' : 'text-white/80';
  const iconColor = scrolled ? 'text-espresso' : 'text-white';
  const logoColor = scrolled ? 'text-espresso' : 'text-white';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_#E8E2D9]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Logo */}
          <Link to="/" className="font-serif text-xl sm:text-2xl tracking-wider">
            <span className={logoColor}>VELMORA</span>
          </Link>

          {/* Center nav links — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/shop"
              className={`text-sm font-medium ${linkColor} hover:text-gold transition-colors tracking-wide uppercase`}
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium ${linkColor} hover:text-gold transition-colors tracking-wide uppercase`}
            >
              Collections
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium ${linkColor} hover:text-gold transition-colors tracking-wide uppercase`}
            >
              About
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium ${linkColor} hover:text-gold transition-colors tracking-wide uppercase`}
            >
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Search"
            >
              <Search className={`w-5 h-5 ${iconColor}`} />
            </button>
            <button
              onClick={openDrawer}
              className="p-2 rounded-full hover:bg-black/5 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className={`w-5 h-5 ${iconColor}`} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${iconColor}`} />
              ) : (
                <Menu className={`w-5 h-5 ${iconColor}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-espresso tracking-wide uppercase py-2"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-espresso tracking-wide uppercase py-2"
            >
              Collections
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-espresso tracking-wide uppercase py-2"
            >
              About
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-espresso tracking-wide uppercase py-2"
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}