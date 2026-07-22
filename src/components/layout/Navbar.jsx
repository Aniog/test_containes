import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
            ? 'bg-[var(--velmora-bg)]/95 backdrop-blur-sm shadow-sm'
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
            <Link to="/" className="velmora-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-xs tracking-[0.15em] uppercase hover:text-[var(--velmora-warm)] transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-xs tracking-[0.15em] uppercase hover:text-[var(--velmora-warm)] transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-xs tracking-[0.15em] uppercase hover:text-[var(--velmora-warm)] transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-xs tracking-[0.15em] uppercase hover:text-[var(--velmora-warm)] transition-colors">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:text-[var(--velmora-warm)] transition-colors" aria-label="Search">
                <Search size={18} />
              </button>
              <button
                className="p-2 hover:text-[var(--velmora-warm)] transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[var(--velmora-warm)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-bg)] pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-8">
            <Link to="/shop" className="velmora-heading text-2xl hover:text-[var(--velmora-warm)] transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="velmora-heading text-2xl hover:text-[var(--velmora-warm)] transition-colors">
              Collections
            </Link>
            <Link to="/about" className="velmora-heading text-2xl hover:text-[var(--velmora-warm)] transition-colors">
              About
            </Link>
            <Link to="/journal" className="velmora-heading text-2xl hover:text-[var(--velmora-warm)] transition-colors">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
