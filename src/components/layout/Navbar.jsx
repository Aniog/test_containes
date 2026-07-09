import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { toggleCart } = useCart();
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

  const navClasses = cn(
    'fixed top-0 w-full z-50 transition-all duration-300 border-b',
    {
      'bg-background/95 backdrop-blur-md border-border text-foreground py-4': isScrolled || !isHomepage || isMobileMenuOpen,
      'bg-transparent border-transparent text-white py-6': !isScrolled && isHomepage && !isMobileMenuOpen,
    }
  );

  const links = [
    { name: 'Shop All', path: '/collections/all' },
    { name: 'Earrings', path: '/collections/earrings' },
    { name: 'Necklaces', path: '/collections/necklaces' },
    { name: 'Our Story', path: '/about' },
  ];

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 text-inherit"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-start space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase">
                Velmora
              </Link>
            </div>

            {/* Icons */}
            <div className="flex flex-1 justify-end items-center space-x-4">
              <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
                <Search size={20} />
              </button>
              <button 
                onClick={toggleCart}
                className="p-2 hover:opacity-70 transition-opacity relative" 
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {/* Cart badge could go here */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-background md:hidden">
          <div className="px-4 py-8 space-y-6 flex flex-col items-center text-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
