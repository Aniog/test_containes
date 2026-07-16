import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/shop" className="text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-1 hover:text-accent transition-colors duration-300" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-1 hover:text-accent transition-colors duration-300 relative"
                onClick={openDrawer}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-1 hover:text-accent transition-colors duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-12">
            <Link to="/shop" className="serif-heading text-2xl hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="serif-heading text-2xl hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="serif-heading text-2xl hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/journal" className="serif-heading text-2xl hover:text-accent transition-colors">
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
