import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const { itemCount, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          (isScrolled || !isHome || mobileMenuOpen)
            ? "bg-background/95 backdrop-blur-sm shadow-sm text-foreground py-4"
            : "bg-transparent text-white py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex md:hidden">
            <button aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="w-1/3 hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Shop</Link>
            <Link to="/shop" className="hover:opacity-70 transition-opacity">Collections</Link>
            <Link to="/#" className="hover:opacity-70 transition-opacity">About</Link>
            <Link to="/#" className="hover:opacity-70 transition-opacity">Journal</Link>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] font-medium uppercase">
              Velmora
            </Link>
          </div>

          <div className="w-1/3 flex justify-end items-center gap-6">
            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button
              aria-label="Cart"
              className="relative hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 pt-24 px-6 transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-xl font-serif uppercase tracking-widest">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop All</Link>
          <Link to="/shop">Earrings</Link>
          <Link to="/shop">Necklaces</Link>
          <hr className="border-border" />
          <Link to="/#" className="text-base text-muted-foreground">About</Link>
          <Link to="/#" className="text-base text-muted-foreground">Journal</Link>
          <Link to="/#" className="text-base text-muted-foreground">Contact</Link>
        </nav>
      </div>
    </>
  );
}
