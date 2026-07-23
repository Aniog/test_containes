import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24 h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center nav links (desktop) */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          <Link to="/shop" className="text-xs tracking-[0.15em] uppercase text-espresso/80 hover:text-espresso transition-colors">
            Shop
          </Link>
          <Link to="/shop" className="text-xs tracking-[0.15em] uppercase text-espresso/80 hover:text-espresso transition-colors">
            Collections
          </Link>
          <Link to="/" className="text-xs tracking-[0.15em] uppercase text-espresso/80 hover:text-espresso transition-colors">
            About
          </Link>
          <Link to="/" className="text-xs tracking-[0.15em] uppercase text-espresso/80 hover:text-espresso transition-colors">
            Journal
          </Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-[28px] tracking-[0.15em] text-espresso"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button className="p-1" aria-label="Search">
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px] text-espresso/70 hover:text-espresso transition-colors" />
          </button>
          <button
            onClick={openCart}
            className="p-1 relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px] text-espresso/70 hover:text-espresso transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-[10px] font-medium text-white flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-border px-6 py-6 flex flex-col gap-5">
          <Link to="/shop" className="text-xs tracking-[0.15em] uppercase text-espresso/80">
            Shop
          </Link>
          <Link to="/shop" className="text-xs tracking-[0.15em] uppercase text-espresso/80">
            Collections
          </Link>
          <Link to="/" className="text-xs tracking-[0.15em] uppercase text-espresso/80">
            About
          </Link>
          <Link to="/" className="text-xs tracking-[0.15em] uppercase text-espresso/80">
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}