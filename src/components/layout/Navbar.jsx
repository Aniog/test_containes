import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-velmora-cream/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClass = `text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-200 ${
    scrolled || !isHome ? 'text-velmora-base hover:text-velmora-gold' : 'text-white/90 hover:text-white'
  }`;

  const iconClass = `w-5 h-5 transition-colors duration-200 ${
    scrolled || !isHome ? 'text-velmora-base hover:text-velmora-gold' : 'text-white/90 hover:text-white'
  }`;

  return (
    <nav className={navClass}>
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-base' : 'text-white'}`} />
          ) : (
            <Menu className={`w-5 h-5 ${scrolled || !isHome ? 'text-velmora-base' : 'text-white'}`} />
          )}
        </button>

        {/* Center nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={linkClass}>Shop</Link>
          <Link to="/shop?category=Earrings" className={linkClass}>Earrings</Link>
          <Link to="/shop?category=Necklaces" className={linkClass}>Necklaces</Link>
          <Link to="/shop?category=Huggies" className={linkClass}>Huggies</Link>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-[0.3em] font-medium transition-colors duration-200 ${
            scrolled || !isHome ? 'text-velmora-base' : 'text-white'
          }`}
        >
          VELMORA
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="p-1" aria-label="Search">
            <Search className={iconClass} />
          </button>
          <button onClick={openDrawer} className="p-1 relative" aria-label="Cart">
            <ShoppingBag className={iconClass} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="bg-velmora-cream border-t border-velmora-border px-6 py-4 flex flex-col gap-3">
          <Link to="/shop" className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-base py-2">Shop All</Link>
          <Link to="/shop?category=Earrings" className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-base py-2">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-base py-2">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-base py-2">Huggies</Link>
        </div>
      </div>
    </nav>
  );
}