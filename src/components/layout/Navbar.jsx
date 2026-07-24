import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF8F5]/95 backdrop-blur-sm shadow-sm'
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
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider font-light">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-sm uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:text-accent transition-colors duration-300" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-accent transition-colors duration-300 relative"
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 py-12">
            <Link to="/shop" className="serif-heading text-2xl tracking-wider hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="serif-heading text-2xl tracking-wider hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="serif-heading text-2xl tracking-wider hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="serif-heading text-2xl tracking-wider hover:text-accent transition-colors">
              Journal
            </Link>
          </nav>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
