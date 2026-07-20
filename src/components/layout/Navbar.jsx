import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-surface/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2 text-text-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-2xl lg:text-3xl tracking-wider text-text-primary">
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/shop"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
              >
                Collections
              </Link>
              <a
                href="#about"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
              >
                About
              </a>
              <a
                href="#journal"
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
              >
                Journal
              </a>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={`p-2 transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className={`p-2 relative transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-text-primary hover:text-accent'
                    : 'text-dark-text/90 hover:text-dark-text'
                }`}
                onClick={onCartOpen}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-surface shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-serif text-xl tracking-wider text-text-primary">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
                <X className="w-5 h-5 text-text-primary" />
              </button>
            </div>
            <nav className="p-6 flex flex-col gap-6">
              <Link to="/shop" className="text-sm tracking-widest uppercase text-text-primary hover:text-accent transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-sm tracking-widest uppercase text-text-primary hover:text-accent transition-colors">
                Collections
              </Link>
              <a href="#about" className="text-sm tracking-widest uppercase text-text-primary hover:text-accent transition-colors">
                About
              </a>
              <a href="#journal" className="text-sm tracking-widest uppercase text-text-primary hover:text-accent transition-colors">
                Journal
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
