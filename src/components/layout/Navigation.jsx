import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  const { openCart, getCartCount } = useCartStore();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-500',
        isScrolled || !isHomepage || mobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md text-foreground border-b border-border/50 py-4'
          : 'bg-transparent text-primary-foreground py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Mobile menu toggle */}
        <div className="md:hidden flex-1">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-[0.5] flex justify-center md:justify-start">
          <Link to="/" className="text-3xl font-serif tracking-widest uppercase">
            Velmora
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-[0.2em] link-underline font-medium hover:opacity-70 transition-opacity",
                (!isScrolled && isHomepage && !mobileMenuOpen) ? "after:bg-white" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative" 
            aria-label="Cart"
            onClick={openCart}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className={cn(
                "absolute top-1 right-0 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-medium",
                (isScrolled || !isHomepage || mobileMenuOpen) ? "bg-primary text-primary-foreground" : "bg-white text-black"
              )}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "absolute top-full left-0 w-full bg-background border-b shadow-xl overflow-hidden transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-[70vh] py-8 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-6 flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-xl font-serif uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center justify-between border-b pb-4"
            >
              {link.name}
              <ArrowRight className="w-5 h-5 opacity-40" />
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex flex-col gap-4 text-sm uppercase tracking-widest text-muted-foreground">
            <Link to="/account" className="hover:text-foreground transition-colors">Account</Link>
            <Link to="/wishlist" className="hover:text-foreground transition-colors">Wishlist</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};