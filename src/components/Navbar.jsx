import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();

  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const headerClass = cn(
    "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out border-b",
    isScrolled 
      ? "bg-background/95 backdrop-blur-md text-foreground border-border py-4" 
      : isHomepage 
        ? "bg-transparent text-stone-50 border-transparent py-6"
        : "bg-background text-foreground border-border py-6"
  );

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-3xl tracking-widest uppercase md:translate-x-[calc(50vw-50%-3rem)] md:absolute md:left-1/2 md:-ml-[85px] z-10 transition-transform">
          Velmora
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="hover:opacity-70 transition-opacity relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-0 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background text-foreground z-50 md:hidden flex flex-col pt-24 px-8 pb-8">
          <button 
            className="absolute top-6 right-6 p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col gap-8 text-2xl font-serif">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto">
             <Link 
                to="/account" 
                className="block text-sm uppercase tracking-widest border-b border-border pb-4 mb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
               Account
             </Link>
             <p className="text-sm text-muted-foreground">Free shipping on all global orders.</p>
          </div>
        </div>
      )}
    </header>
  );
}
