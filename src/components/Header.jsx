import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-background/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl lg:text-3xl font-light tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
              >
                Journal
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`p-2 transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={openDrawer}
                className={`relative p-2 transition-colors duration-300 hover:text-accent ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors duration-300 ${
                  isScrolled || !isHome ? 'text-foreground' : 'text-white/90'
                }`}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/shop" className="serif-heading text-3xl font-light">
              Shop
            </Link>
            <Link to="/shop" className="serif-heading text-3xl font-light">
              Collections
            </Link>
            <Link to="/about" className="serif-heading text-3xl font-light">
              About
            </Link>
            <Link to="/journal" className="serif-heading text-3xl font-light">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
