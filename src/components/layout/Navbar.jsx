import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItemsCount = useCartStore((state) => 
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentNav = isHomepage && !isScrolled;

  const getNavClasses = () => {
    let classes = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ";
    if (transparentNav) {
      // Assuming hero has a dark image, so text should be white at the top. If hero is light, we can adjust.
      // Let's bet on text-primary when solid, white when transparent over dark image.
      classes += "bg-transparent border-transparent text-primary"; 
    } else {
      classes += "bg-background/90 backdrop-blur-md border-border/50 text-foreground";
    }
    return classes;
  };

  return (
    <>
      <header className={getNavClasses()}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest uppercase relative z-50">
              Velmora
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wide font-medium">
              <Link to="/shop" className="hover:text-primary/70 transition-colors">Shop</Link>
              <Link to="/shop?collection=bestsellers" className="hover:text-primary/70 transition-colors">Collections</Link>
              <Link to="/about" className="hover:text-primary/70 transition-colors">About</Link>
              <Link to="/journal" className="hover:text-primary/70 transition-colors">Journal</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-5 relative z-50">
              <button aria-label="Search" className="hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
              <button 
                onClick={toggleCart} 
                aria-label="Cart" 
                className="hover:opacity-70 transition-opacity relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 pt-24 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col`}
      >
        <nav className="flex flex-col space-y-6 text-2xl font-serif uppercase tracking-widest mt-8">
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4 w-full">Shop</Link>
          <Link to="/shop?collection=bestsellers" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4 w-full">Collections</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4 w-full">About</Link>
          <Link to="/journal" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-border pb-4 w-full">Journal</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;