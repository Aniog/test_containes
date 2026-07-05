import React, { useState, useEffect } from 'react';
    import { useLocation, Link } from 'react-router-dom';
    import { Search, ShoppingBag, Menu, X } from 'lucide-react';
    import { cn } from '@/lib/utils';
    import { useCart } from '@/context/CartContext';
    
    const Navbar = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const location = useLocation();
      const { setIsCartOpen, cartCount } = useCart();
      const isHome = location.pathname === '/';
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navLinks = [
        { name: 'Shop', href: '/shop' },
        { name: 'Collections', href: '/collections' },
        { name: 'About', href: '/about' },
        { name: 'Journal', href: '/journal' },
      ];
    
      const textColorClass = isHome && !isScrolled ? 'text-white' : 'text-black';
      const bgColorClass = isScrolled || !isHome ? 'bg-white shadow-sm' : 'bg-transparent';
    
      return (
        <nav
          className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12',
            bgColorClass
          )}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-1">
              <Link to="/" className={cn('text-2xl font-serif tracking-widest', textColorClass)}>
                VELMORA
              </Link>
            </div>
    
            {/* Center: Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-xs uppercase tracking-[0.2em] hover:opacity-60 transition-opacity',
                    textColorClass
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
    
            {/* Right: Search + Cart */}
            <div className="flex-1 flex justify-end items-center space-x-5">
              <button className={cn('hover:opacity-60 transition-opacity', textColorClass)}>
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn('relative hover:opacity-60 transition-opacity', textColorClass)}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className={cn('md:hidden hover:opacity-60 transition-opacity', textColorClass)}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
    
          {/* Mobile Menu Overlay */}
          <div
            className={cn(
              'fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden',
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <button
              className="absolute top-6 right-6 text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-serif tracking-widest text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      );
    };
    
    export default Navbar;
    