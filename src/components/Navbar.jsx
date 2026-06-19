import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, items } = useCartStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHome || isMobileMenuOpen
      ? 'bg-background border-b border-border py-4 text-foreground'
      : 'bg-transparent py-6 text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="font-serif text-2xl tracking-widest uppercase absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          VELMORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <Link to="/shop" className={`hover:text-primary transition-colors ${isHome && !isScrolled ? 'hover:text-white/80' : ''}`}>Shop</Link>
          <Link to="/shop?category=collections" className={`hover:text-primary transition-colors ${isHome && !isScrolled ? 'hover:text-white/80' : ''}`}>Collections</Link>
          <Link to="#" className={`hover:text-primary transition-colors ${isHome && !isScrolled ? 'hover:text-white/80' : ''}`}>About</Link>
          <Link to="#" className={`hover:text-primary transition-colors ${isHome && !isScrolled ? 'hover:text-white/80' : ''}`}>Journal</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 -mr-2 hover:text-primary transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button 
            className="p-2 -mr-2 hover:text-primary transition-colors relative"
            onClick={toggleCart}
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className={`absolute top-0 right-0 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-medium ${
                isScrolled || !isHome ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border shadow-soft h-[calc(100vh-60px)] md:hidden flex flex-col pt-8 px-6">
          <div className="flex flex-col gap-6 text-lg uppercase tracking-widest font-medium">
            <Link to="/shop" className="text-foreground">Shop All</Link>
            <Link to="/shop?category=earrings" className="text-foreground">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-foreground">Necklaces</Link>
            <Link to="/shop?category=huggies" className="text-foreground">Huggies</Link>
            <div className="h-px w-full bg-border my-2"></div>
            <Link to="#" className="text-foreground">About Us</Link>
            <Link to="#" className="text-foreground">Journal</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;