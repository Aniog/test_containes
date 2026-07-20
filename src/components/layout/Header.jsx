import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import useCartStore from '@/store/useCartStore';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, cartCount } = useCartStore();
  
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
  ];

  const headerStyle = cn(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent',
    {
      'bg-background/90 backdrop-blur-md border-borders py-4 text-foreground': isScrolled || !isHomepage,
      'bg-transparent py-6 text-white': !isScrolled && isHomepage,
    }
  );

  return (
    <>
      <header className={headerStyle}>
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 w-1/3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="w-1/3 flex justify-center">
            <Link to="/" className="text-3xl font-serif font-medium tracking-widest uppercase">
              Velmora
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end space-x-4 w-1/3">
            <button className="p-2 hover:text-primary transition-colors hidden sm:block">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button 
              className="p-2 hover:text-primary transition-colors relative"
              onClick={openCart}
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {cartCount() > 0 && (
                <span className="absolute top-1 right-0 w-4 h-4 bg-primary text-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-50 transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b border-borders">
          <span className="text-2xl font-serif tracking-widest uppercase">Velmora</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-lg font-medium tracking-wide border-b border-borders pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
