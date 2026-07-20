import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl lg:text-3xl font-light tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300">
                Shop
              </Link>
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300">
                Journal
              </Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:text-accent transition-colors duration-300" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 hover:text-accent transition-colors duration-300 relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <span className="serif-heading text-2xl font-light tracking-wider">VELMORA</span>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-8">
            <Link
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="serif-heading text-3xl font-light hover:text-accent transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="serif-heading text-3xl font-light hover:text-accent transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="serif-heading text-3xl font-light hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/journal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="serif-heading text-3xl font-light hover:text-accent transition-colors"
            >
              Journal
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
