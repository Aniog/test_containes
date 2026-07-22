import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-background/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClasses = `text-sm tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
    scrolled || !isHome ? 'text-foreground' : 'text-white'
  }`;

  const iconClasses = `w-5 h-5 transition-colors duration-300 hover:text-accent ${
    scrolled || !isHome ? 'text-foreground' : 'text-white'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${scrolled || !isHome ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={iconClasses} />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-widest-xl font-light">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop" className={linkClasses}>Collections</Link>
              <Link to="/about" className={linkClasses}>About</Link>
              <Link to="/journal" className={linkClasses}>Journal</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-1">
                <Search className={iconClasses} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
                className="p-1 relative"
              >
                <ShoppingBag className={iconClasses} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background animate-fade-in md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="serif-heading text-3xl tracking-widest text-foreground">Shop</Link>
            <Link to="/shop" className="serif-heading text-3xl tracking-widest text-foreground">Collections</Link>
            <Link to="/about" className="serif-heading text-3xl tracking-widest text-foreground">About</Link>
            <Link to="/journal" className="serif-heading text-3xl tracking-widest text-foreground">Journal</Link>
          </div>
        </div>
      )}
    </>
  );
}
