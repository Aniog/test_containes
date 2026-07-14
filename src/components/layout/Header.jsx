import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/collection' },
    { name: 'Collections', path: '/collection' },
    { name: 'About', path: '/#' },
    { name: 'Journal', path: '/#' },
  ];

  const headerClass = `fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
    isScrolled || !isHome
      ? 'bg-background/95 backdrop-blur-sm shadow-sm text-foreground py-4'
      : 'bg-transparent text-primary-foreground py-6'
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-widest-plus uppercase">
            VELMORA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="hover:text-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Cart" 
              className="hover:text-accent transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex flex-col pt-24 px-6 md:hidden">
          <button 
            className="absolute top-6 right-6 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <nav className="flex flex-col space-y-8 mt-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-3xl font-serif text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;