import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import useCartStore from '../../store/useCartStore';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { toggleCart, itemCount } = useCartStore();

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
  }, [location.pathname]);

  const headerClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    isScrolled || !isHome ? 'bg-velmora-base shadow-sm py-4' : 'bg-transparent py-6'
  }`;

  const textClasses = isScrolled || !isHome ? 'text-velmora-dark' : 'text-velmora-base';
  const logoClasses = `font-serif text-2xl tracking-widest uppercase transition-colors ${
    isScrolled || !isHome ? 'text-velmora-dark' : 'text-velmora-base'
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Menu Toggle / Logo */}
            <div className="flex items-center flex-1">
              <button 
                className={`md:hidden mr-4 ${textClasses}`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              <Link to="/" className={logoClasses}>
                Velmora
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex justify-center flex-1">
              <ul className={`flex space-x-8 text-sm uppercase tracking-wider font-medium ${textClasses}`}>
                <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
                <li><Link to="/shop?category=collections" className="hover:text-velmora-gold transition-colors">Collections</Link></li>
                <li><Link to="/about" className="hover:text-velmora-gold transition-colors">About</Link></li>
                <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              </ul>
            </nav>

            {/* Right: Icons */}
            <div className="flex items-center justify-end flex-1 space-x-6">
              <button className={`${textClasses} hover:text-velmora-gold transition-colors hidden md:block`}>
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button 
                className={`${textClasses} hover:text-velmora-gold transition-colors relative`}
                onClick={toggleCart}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-velmora-base text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {itemCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-base flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-velmora-border">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-velmora-dark">
              Velmora
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-velmora-dark p-2">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="flex flex-col space-y-6 text-lg uppercase tracking-wider font-medium text-velmora-dark">
              <li><Link to="/shop">Shop All</Link></li>
              <li><Link to="/shop?category=earrings">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies">Huggies</Link></li>
              <li className="pt-6 border-t border-velmora-border"><Link to="/about">About Us</Link></li>
              <li><Link to="/journal">Journal</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;