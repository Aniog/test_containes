import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || !isHome
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop?category=earrings" className="text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-primary transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="p-2 hover:text-primary transition-colors duration-300" aria-label="Search">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:text-primary transition-colors duration-300 relative"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background transition-transform duration-500 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link to="/shop" className="serif-heading text-3xl hover:text-primary transition-colors">Shop</Link>
          <Link to="/shop?category=earrings" className="serif-heading text-3xl hover:text-primary transition-colors">Collections</Link>
          <Link to="/about" className="serif-heading text-3xl hover:text-primary transition-colors">About</Link>
          <Link to="/journal" className="serif-heading text-3xl hover:text-primary transition-colors">Journal</Link>
        </div>
      </div>
    </>
  );
}
