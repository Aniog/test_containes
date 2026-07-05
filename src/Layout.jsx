import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import CartDrawer from './components/CartDrawer';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-foreground bg-background min-h-screen flex flex-col">
      {/* Trust Bar (Optional, can be placed on home page or globally) */}
      <div className="bg-primary text-primary-foreground text-xs py-2 text-center font-medium tracking-wide">
        Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-serif text-3xl font-bold tracking-wider text-foreground">
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest">
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-foreground hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button 
              className="p-2 text-foreground hover:text-primary transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border py-4 px-4 flex flex-col gap-4 shadow-lg">
             <Link to="/shop" className="p-2 font-medium text-lg uppercase tracking-widest hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
             <Link to="/collections" className="p-2 font-medium text-lg uppercase tracking-widest hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
             <Link to="/about" className="p-2 font-medium text-lg uppercase tracking-widest hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
             <Link to="/journal" className="p-2 font-medium text-lg uppercase tracking-widest hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Journal</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold tracking-wider mb-6">VELMORA</h3>
            <p className="text-muted/80 max-w-sm">
              Demi-fine jewelry crafted to be treasured. Quality 18K gold vermeil pieces designed for everyday elegance.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium uppercase tracking-widest text-sm mb-6 text-muted">Shop</h4>
            <ul className="flex flex-col gap-3 text-muted/80">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/collections/gifts" className="hover:text-white transition-colors">Gifts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium uppercase tracking-widest text-sm mb-6 text-muted">Help</h4>
            <ul className="flex flex-col gap-3 text-muted/80">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between text-sm text-muted/60">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;