import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsOpen: setCartOpen, items } = useCartStore();
  
  const isHomepage = location.pathname === '/';
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

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
  }, [location]);

  const navClasses = `fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
    isHomepage 
      ? isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border py-4 text-foreground' 
        : 'bg-transparent py-6 text-white hover:bg-background/95 hover:text-foreground hover:backdrop-blur-md border-b border-transparent hover:border-border'
      : 'bg-background/95 backdrop-blur-md border-b border-border py-4 text-foreground'
  }`;

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'Collections', href: '/shop?collection=all' },
    { name: 'About', href: '#' },
    { name: 'Journal', href: '#' },
  ];

  return (
    <>
      <header className={navClasses}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
          
          <nav className="hidden md:flex gap-8 items-center flex-1">
            {navLinks.map((link) => (
               <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-sm uppercase tracking-widest hover:text-primary transition-colors"
                >
                  {link.name}
               </Link>
            ))}
          </nav>
          
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] flex-shrink-0 text-center">
            VELMORA
          </Link>
          
          <div className="flex gap-4 items-center flex-1 justify-end">
            <button className="hidden md:block hover:text-primary transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="relative hover:text-primary transition-colors"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm bg-background h-full flex flex-col p-6 animate-in slide-in-from-left">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6">
              <X size={24} strokeWidth={1.5} />
            </button>
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] mb-12">
              VELMORA
            </Link>
            <nav className="flex flex-col gap-6">
               {navLinks.map((link) => (
                 <Link 
                    key={link.name} 
                    to={link.href}
                    className="text-lg uppercase tracking-widest text-foreground hover:text-primary"
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
}
