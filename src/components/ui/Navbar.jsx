import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-background/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="serif-heading text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">
                Collections
              </Link>
              <Link to="/about" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/journal" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">
                Journal
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="btn-ghost p-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button
                className="btn-ghost p-2 relative"
                onClick={() => setIsOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden btn-ghost p-2"
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background slide-in-right">
          <div className="flex items-center justify-between p-6 border-b">
            <Link to="/" className="serif-heading text-2xl tracking-wider" onClick={() => setMobileOpen(false)}>
              VELMORA
            </Link>
            <button onClick={() => setMobileOpen(false)} className="btn-ghost p-2" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col p-8 gap-6">
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-lg tracking-widest uppercase">
              Shop
            </Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-lg tracking-widest uppercase">
              Collections
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="text-lg tracking-widest uppercase">
              About
            </Link>
            <Link to="/journal" onClick={() => setMobileOpen(false)} className="text-lg tracking-widest uppercase">
              Journal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
