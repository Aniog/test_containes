import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar({ onCartOpen }) {
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF9F7]/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-velmora">
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
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-xs tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-xs tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-xs tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-xs tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 hover:text-[#C9A96E] transition-colors duration-300" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-[#C9A96E] transition-colors duration-300 relative"
                onClick={onCartOpen}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C9A96E] text-[10px] font-medium rounded-full flex items-center justify-center text-[#1A1A1A]">
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
        <div className="fixed inset-0 z-40 bg-[#FAF9F7] md:hidden pt-20">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="font-serif text-3xl hover:text-[#C9A96E] transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="font-serif text-3xl hover:text-[#C9A96E] transition-colors">
              Collections
            </Link>
            <Link to="/about" className="font-serif text-3xl hover:text-[#C9A96E] transition-colors">
              About
            </Link>
            <Link to="/journal" className="font-serif text-3xl hover:text-[#C9A96E] transition-colors">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
