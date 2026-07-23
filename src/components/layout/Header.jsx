import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../store/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const headerClasses = `fixed w-full top-0 z-40 transition-colors duration-300 ${
    !isScrolled && isHomepage
      ? 'bg-transparent text-primary-foreground'
      : 'bg-background text-foreground shadow-sm'
  }`;

  const navLinkProps = (path) => {
    const isActive = location.pathname === path;
    return {
      to: path,
      className: `text-sm uppercase tracking-widest transition-colors hover:text-accent ${isActive ? 'text-accent' : ''}`
    };
  };

  const navLinks = [
    { name: 'Shop', path: '/collections' },
    { name: 'Collections', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Journal', path: '#' }
  ];

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-serif font-medium tracking-wide">
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} {...navLinkProps(link.path)}>
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button aria-label="Search" className="p-2 -mr-2 hover:text-accent transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button 
                aria-label="Cart" 
                className="p-2 -mr-2 hover:text-accent transition-colors relative"
                onClick={openCart}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="relative w-[80%] max-w-sm bg-background h-full shadow-xl flex flex-col p-6 animate-in slide-in-from-left">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif font-medium tracking-wide text-foreground">
                VELMORA
              </span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg uppercase tracking-widest text-foreground hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
