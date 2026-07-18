import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((state) => state.items.reduce((s, i) => s + i.quantity, 0));
  const toggleCart = useCartStore((state) => state.toggleCart);
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-velmora-dark/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-widest text-white uppercase">
              Velmora
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-white/90 font-sans text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-white/90 font-sans text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-white/90 font-sans text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-white/90 font-sans text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors duration-300">
                Journal
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="text-white p-2 hover:text-velmora-gold transition-colors duration-300" aria-label="Search">
                <Search size={20} />
              </button>
              <button
                className="text-white p-2 hover:text-velmora-gold transition-colors duration-300 relative"
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velmora-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
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
        <div className="fixed inset-0 z-40 bg-velmora-dark pt-20 md:hidden">
          <div className="flex flex-col items-center gap-8 pt-8">
            <Link to="/shop" className="text-white font-serif text-2xl tracking-wide hover:text-velmora-gold transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-white font-serif text-2xl tracking-wide hover:text-velmora-gold transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-white font-serif text-2xl tracking-wide hover:text-velmora-gold transition-colors">
              About
            </Link>
            <Link to="/journal" className="text-white font-serif text-2xl tracking-wide hover:text-velmora-gold transition-colors">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
