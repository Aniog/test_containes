import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleDrawer } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-white/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClasses = `text-sm uppercase tracking-wider transition-colors duration-300 ${
    scrolled || !isHome
      ? 'text-[#1a1a1a] hover:text-[#c9a96e]'
      : 'text-white hover:text-[#c9a96e]'
  }`;

  const iconClasses = `w-5 h-5 transition-colors duration-300 ${
    scrolled || !isHome
      ? 'text-[#1a1a1a] hover:text-[#c9a96e]'
      : 'text-white hover:text-[#c9a96e]'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-white'}`} />
              ) : (
                <Menu className={iconClasses} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <span className={`velmora-heading text-xl lg:text-2xl font-medium tracking-widest ${
                scrolled || !isHome ? 'text-[#1a1a1a]' : 'text-white'
              }`}>
                VELMORA
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
              <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
              <Link to="/shop?category=huggies" className={linkClasses}>Huggies</Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button className="p-2" aria-label="Search">
                <Search className={iconClasses} />
              </button>
              <button className="p-2 relative" onClick={toggleDrawer} aria-label="Cart">
                <ShoppingBag className={iconClasses} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9a96e] text-white text-[10px] rounded-full flex items-center justify-center">
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
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="text-lg velmora-heading text-[#1a1a1a]">Shop All</Link>
            <Link to="/shop?category=earrings" className="text-lg velmora-heading text-[#1a1a1a]">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-lg velmora-heading text-[#1a1a1a]">Necklaces</Link>
            <Link to="/shop?category=huggies" className="text-lg velmora-heading text-[#1a1a1a]">Huggies</Link>
            <div className="velmora-divider my-4" />
            <Link to="/about" className="text-lg velmora-heading text-[#1a1a1a]">Our Story</Link>
            <Link to="/journal" className="text-lg velmora-heading text-[#1a1a1a]">Journal</Link>
          </div>
        </div>
      )}
    </>
  );
}
