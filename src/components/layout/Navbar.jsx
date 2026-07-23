import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-xl md:text-2xl tracking-wider font-light">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-sm tracking-wider uppercase hover:text-[#B8956A] transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop?category=earrings" className="text-sm tracking-wider uppercase hover:text-[#B8956A] transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-wider uppercase hover:text-[#B8956A] transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-wider uppercase hover:text-[#B8956A] transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 hover:text-[#B8956A] transition-colors duration-300" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="p-2 hover:text-[#B8956A] transition-colors duration-300 relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B8956A] text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] md:hidden pt-20">
          <nav className="flex flex-col items-center gap-8 py-12">
            <Link to="/shop" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop?category=earrings" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </nav>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
