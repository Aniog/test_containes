import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const navBg = scrolled
    ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm'
    : isHome
      ? 'bg-transparent'
      : 'bg-brand-cream/95 backdrop-blur-md';

  const textColor = scrolled || !isHome ? 'text-brand-warm-black' : 'text-white';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-ultra-wide font-semibold transition-colors duration-300 ${textColor}`}
            >
              VELMORA
            </Link>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/shop"
                className={`text-xs tracking-super-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${textColor}`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs tracking-super-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${textColor}`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs tracking-super-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${textColor}`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs tracking-super-wide uppercase font-sans font-medium transition-colors duration-300 hover:text-brand-gold ${textColor}`}
              >
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 hover:text-brand-gold ${textColor}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 relative transition-colors duration-300 hover:text-brand-gold ${textColor}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-brand-gold text-white text-[10px] font-sans font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-cream pt-20 md:hidden">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link
              to="/shop"
              className="font-serif text-2xl tracking-super-wide uppercase text-brand-warm-black hover:text-brand-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              className="font-serif text-2xl tracking-super-wide uppercase text-brand-warm-black hover:text-brand-gold transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="font-serif text-2xl tracking-super-wide uppercase text-brand-warm-black hover:text-brand-gold transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              className="font-serif text-2xl tracking-super-wide uppercase text-brand-warm-black hover:text-brand-gold transition-colors"
            >
              Journal
            </Link>
            <div className="w-12 h-px bg-brand-warm-border my-4" />
            <Link
              to="/shop"
              className="text-xs tracking-super-wide uppercase font-sans text-brand-warm-gray hover:text-brand-gold transition-colors"
            >
              Free Shipping on All Orders
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
