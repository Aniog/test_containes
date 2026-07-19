import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClass = scrolled
    ? 'bg-white/90 backdrop-blur-md border-b border-brand-border shadow-sm'
    : 'bg-transparent';

  const linkClass = 'text-sm tracking-wide transition-colors duration-200 hover:text-brand-accent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            className="md:hidden p-2 -ml-2 text-brand-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-brand-ink">
            VELMORA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className={linkClass}>Shop</Link>
            <Link to="/shop?category=earrings" className={linkClass}>Earrings</Link>
            <Link to="/shop?category=necklaces" className={linkClass}>Necklaces</Link>
            <Link to="/shop?category=huggies" className={linkClass}>Huggies</Link>
            <Link to="/shop" className={linkClass}>Collections</Link>
            <Link to="/" className={linkClass}>About</Link>
            <Link to="/" className={linkClass}>Journal</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button
              className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors"
              onClick={onOpenCart}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link to="/shop" className="block text-sm tracking-wide text-brand-ink">Shop</Link>
            <Link to="/shop?category=earrings" className="block text-sm tracking-wide text-brand-ink">Earrings</Link>
            <Link to="/shop?category=necklaces" className="block text-sm tracking-wide text-brand-ink">Necklaces</Link>
            <Link to="/shop?category=huggies" className="block text-sm tracking-wide text-brand-ink">Huggies</Link>
            <Link to="/shop" className="block text-sm tracking-wide text-brand-ink">Collections</Link>
            <Link to="/" className="block text-sm tracking-wide text-brand-ink">About</Link>
            <Link to="/" className="block text-sm tracking-wide text-brand-ink">Journal</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
