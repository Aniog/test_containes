import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isHome && !scrolled
            ? 'bg-transparent text-white'
            : 'bg-background/95 backdrop-blur-sm text-foreground shadow-sm'
        )}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                to="/shop"
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
              >
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                className={cn(
                  'p-2 transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleCart}
                className={cn(
                  'p-2 relative transition-colors duration-300 hover:text-primary',
                  isHome && !scrolled && 'text-white/90 hover:text-white'
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link to="/shop" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>
              Collections
            </Link>
            <Link to="/about" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/journal" className="serif-heading text-3xl" onClick={() => setMobileOpen(false)}>
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
