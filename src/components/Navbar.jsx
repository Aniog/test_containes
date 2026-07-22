import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <span className={`serif-heading text-2xl md:text-3xl tracking-widest transition-colors duration-300 ${
                scrolled || !isHome ? 'text-foreground' : 'text-white'
              }`}>
                VELMORA
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : '/'}
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${
                    scrolled || !isHome ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 ${
                  scrolled || !isHome ? 'text-foreground' : 'text-white'
                }`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                className={`p-2 transition-colors duration-300 hover:opacity-70 relative ${
                  scrolled || !isHome ? 'text-foreground' : 'text-white'
                }`}
                onClick={onCartOpen}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
              <Link
                key={link}
                to={link === 'Shop' ? '/shop' : link === 'Collections' ? '/shop' : '/'}
                className="text-lg tracking-widest uppercase serif-heading text-foreground py-2 border-b border-border/30"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
