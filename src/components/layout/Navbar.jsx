import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, X as CloseIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomepage || isMobileMenuOpen
      ? 'bg-background/95 backdrop-blur-md border-b border-border text-foreground shadow-sm py-3'
      : 'bg-transparent text-white py-5'
  }`;

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Left - Mobile Menu Toggle */}
            <div className="flex items-center md:hidden w-1/3">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} />}
              </button>
            </div>

            {/* Left - Desktop Links */}
            <div className="hidden md:flex w-1/3 space-x-8">
              <Link to="/collections" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Shop</Link>
              <Link to="/collections" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Collections</Link>
              <Link to="/" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">Journal</Link>
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center w-1/3">
              <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase font-medium">
                Velmora
              </Link>
            </div>

            {/* Right - Icons */}
            <div className="flex justify-end items-center w-1/3 space-x-4 md:space-x-6">
              <button className="hidden md:block p-1 hover:text-accent transition-colors" aria-label="Search">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button 
                className="p-1 hover:text-accent transition-colors relative"
                onClick={() => setIsCartOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-40 md:hidden flex flex-col pt-8 px-6 space-y-6">
          <Link to="/collections" className="text-2xl font-serif border-b border-border pb-4">Shop All</Link>
          <Link to="/collections?category=Earrings" className="text-2xl font-serif border-b border-border pb-4">Earrings</Link>
          <Link to="/collections?category=Necklaces" className="text-2xl font-serif border-b border-border pb-4">Necklaces</Link>
          <Link to="/collections?category=Huggies" className="text-2xl font-serif border-b border-border pb-4">Huggies</Link>
          <Link to="/" className="text-2xl font-serif border-b border-border pb-4">Our Story</Link>
        </div>
      )}
    </>
  );
}