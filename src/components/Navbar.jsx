import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-500 py-6",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md translate-y-0 py-4 shadow-sm" 
          : isHome ? "bg-transparent translate-y-0" : "bg-background py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex-1 lg:flex-none text-center lg:text-left">
          <Link 
            to="/" 
            className={cn(
              "text-2xl lg:text-3xl font-serif tracking-widest transition-colors",
              isScrolled || !isHome ? "text-foreground" : "text-white"
            )}
          >
            VELMORA
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
          <Link to="/shop" className={cn("nav-link", isHome && !isScrolled ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground")}>Shop</Link>
          <Link to="/collections" className={cn("nav-link", isHome && !isScrolled ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground")}>Collections</Link>
          <Link to="/about" className={cn("nav-link", isHome && !isScrolled ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground")}>About</Link>
          <Link to="/journal" className={cn("nav-link", isHome && !isScrolled ? "text-white/80 hover:text-white" : "text-muted hover:text-foreground")}>Journal</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 lg:gap-8 min-w-[80px] lg:min-w-0 justify-end">
          <button className={cn("transition-colors", isScrolled || !isHome ? "text-foreground hover:text-gold" : "text-white hover:text-gold/80")}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => setIsCartOpen(true)}
            className={cn("relative transition-colors", isScrolled || !isHome ? "text-foreground hover:text-gold" : "text-white hover:text-gold/80")}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-50 transition-transform duration-500 lg:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full px-8 py-20">
          <button 
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="flex flex-col gap-8">
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif tracking-widest uppercase">Shop</Link>
            <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif tracking-widest uppercase">Collections</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif tracking-widest uppercase">About</Link>
            <Link to="/journal" onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif tracking-widest uppercase">Journal</Link>
          </div>
          <div className="mt-auto pb-12">
            <div className="flex gap-4 mb-4">
              <span className="text-xs uppercase tracking-widest text-muted">Follow Us</span>
            </div>
            <div className="flex gap-6">
              <span className="text-sm uppercase tracking-widest">Instagram</span>
              <span className="text-sm uppercase tracking-widest">Pinterest</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
