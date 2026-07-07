import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-ivory/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-velmora-deep"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center nav links - desktop */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/shop" className="text-sm tracking-wider uppercase text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300">
              Shop
            </Link>
            <Link to="/shop?category=necklaces" className="text-sm tracking-wider uppercase text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300">
              Collections
            </Link>
            <Link to="/about" className="text-sm tracking-wider uppercase text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300">
              About
            </Link>
            <Link to="/journal" className="text-sm tracking-wider uppercase text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300">
              Journal
            </Link>
          </div>

          {/* Logo - centered */}
          <Link
            to="/"
            className="font-serif text-2xl lg:text-3xl tracking-[0.25em] text-velmora-deep absolute left-1/2 -translate-x-1/2"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center space-x-5">
            <button className="text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300" aria-label="Search">
              <Search size={19} />
            </button>
            <button
              onClick={openCart}
              className="relative text-velmora-deep/80 hover:text-velmora-gold transition-colors duration-300"
              aria-label="Cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-velmora-ivory border-t border-velmora-border">
          <div className="px-6 py-6 space-y-5">
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block text-sm tracking-widest uppercase text-velmora-deep">
              Shop
            </Link>
            <Link to="/shop?category=necklaces" onClick={() => setMobileMenuOpen(false)} className="block text-sm tracking-widest uppercase text-velmora-deep">
              Collections
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm tracking-widest uppercase text-velmora-deep">
              About
            </Link>
            <Link to="/journal" onClick={() => setMobileMenuOpen(false)} className="block text-sm tracking-widest uppercase text-velmora-deep">
              Journal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
