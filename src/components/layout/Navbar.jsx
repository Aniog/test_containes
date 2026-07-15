import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const textColorClass = isHomePage && !isScrolled && !isMobileMenuOpen
    ? 'text-white'
    : 'text-[#1A1A1A]';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[#FAF7F2] shadow-sm'
            : isHomePage
              ? 'bg-transparent'
              : 'bg-[#FAF7F2]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${textColorClass} transition-colors`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-wider ${textColorClass} transition-colors`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${textColorClass} text-sm uppercase tracking-wider hover:text-[#C9A962] transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button
                className={`${textColorClass} transition-colors hover:text-[#C9A962] hidden md:block`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              
              <button
                className={`${textColorClass} transition-colors hover:text-[#C9A962] relative`}
                onClick={toggleCart}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A962] text-[#1A1A1A] text-[10px] font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hairline divider */}
        {!isScrolled && !isMobileMenuOpen && isHomePage && (
          <div className="h-px bg-white/20 mx-4 md:mx-8" />
        )}
        {isScrolled && (
          <div className="h-px bg-[#B8956C]/20 mx-4 md:mx-8" />
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF7F2] transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#1A1A1A] text-2xl font-serif uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <button className="text-[#1A1A1A]" aria-label="Search">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
