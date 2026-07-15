import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500
    ${isHome && !isScrolled
      ? 'bg-transparent text-white'
      : 'bg-[var(--velmora-bg)] text-[var(--velmora-text)] shadow-sm'
    }
  `;

  const linkClasses = `
    text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300
    hover:text-[var(--velmora-accent)]
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif-display text-2xl lg:text-3xl tracking-[0.2em] font-light">
              VELMORA
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop?category=earrings" className={linkClasses}>Collections</Link>
              <a href="#about" className={linkClasses}>About</a>
              <a href="#journal" className={linkClasses}>Journal</a>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 transition-colors hover:text-[var(--velmora-accent)]" aria-label="Search">
                <Search size={18} />
              </button>
              <button
                className="p-2 relative transition-colors hover:text-[var(--velmora-accent)]"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--velmora-accent)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--velmora-bg)] pt-20 lg:hidden slide-in-right">
          <div className="flex flex-col items-center gap-8 py-12">
            <Link to="/shop" className="text-lg tracking-[0.15em] uppercase font-serif-display">Shop</Link>
            <Link to="/shop?category=earrings" className="text-lg tracking-[0.15em] uppercase font-serif-display">Collections</Link>
            <a href="#about" className="text-lg tracking-[0.15em] uppercase font-serif-display">About</a>
            <a href="#journal" className="text-lg tracking-[0.15em] uppercase font-serif-display">Journal</a>
            <div className="hairline w-24 my-4" />
            <Link to="/shop" className="btn-accent">Shop Now</Link>
          </div>
        </div>
      )}
    </>
  );
}
