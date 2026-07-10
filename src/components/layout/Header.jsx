import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { itemCount, toggleCart } = useCart();
  const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useUI();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/collection', label: 'Shop' },
    { to: '/collection?category=earrings', label: 'Earrings' },
    { to: '/collection?category=necklaces', label: 'Necklaces' },
    { to: '/collection?category=huggies', label: 'Huggies' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Mobile menu button */}
            <button
              onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
              className={`md:hidden p-2 -ml-2 transition-colors ${
                isTransparent ? 'text-white' : 'text-espresso'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left: Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/collection"
                className={`font-sans text-sm tracking-wide transition-colors hover:text-gold ${
                  isTransparent ? 'text-white' : 'text-stone hover:text-espresso'
                }`}
              >
                Shop
              </Link>
              <div className="relative group">
                <Link
                  to="/collection"
                  className={`font-sans text-sm tracking-wide transition-colors flex items-center gap-1 ${
                    isTransparent ? 'text-white' : 'text-stone hover:text-espresso'
                  }`}
                >
                  Collections
                </Link>
                {/* Dropdown placeholder */}
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-lg rounded-sm py-4 px-6 min-w-[160px]">
                    <Link
                      to="/collection?category=earrings"
                      className="block py-2 text-sm text-stone hover:text-gold transition-colors"
                    >
                      Earrings
                    </Link>
                    <Link
                      to="/collection?category=necklaces"
                      className="block py-2 text-sm text-stone hover:text-gold transition-colors"
                    >
                      Necklaces
                    </Link>
                    <Link
                      to="/collection?category=huggies"
                      className="block py-2 text-sm text-stone hover:text-gold transition-colors"
                    >
                      Huggies
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className={`font-sans text-sm tracking-wide transition-colors hover:text-gold ${
                  isTransparent ? 'text-white' : 'text-stone hover:text-espresso'
                }`}
              >
                About
              </Link>
              <Link
                to="/journal"
                className={`font-sans text-sm tracking-wide transition-colors hover:text-gold ${
                  isTransparent ? 'text-white' : 'text-stone hover:text-espresso'
                }`}
              >
                Journal
              </Link>
            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-wider transition-colors ${
                isTransparent ? 'text-white' : 'text-espresso'
              }`}
            >
              VELMORA
            </Link>

            {/* Right: Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 transition-colors hover:text-gold ${
                  isTransparent ? 'text-white' : 'text-espresso'
                }`}
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={toggleCart}
                className={`p-2 relative transition-colors hover:text-gold ${
                  isTransparent ? 'text-white' : 'text-espresso'
                }`}
                aria-label={`Shopping bag with ${itemCount} items`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-white text-xs font-medium rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className={`absolute w-full left-0 py-4 px-4 transition-colors ${
            isTransparent ? 'bg-charcoal/95' : 'bg-cream'
          }`}>
            <div className="container-main">
              <div className="relative max-w-xl mx-auto">
                <Search
                  size={18}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    isTransparent ? 'text-white/60' : 'text-stone'
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search for jewelry..."
                  className={`w-full pl-12 pr-4 py-3 bg-transparent border-b ${
                    isTransparent
                      ? 'border-white/30 text-white placeholder:text-white/60'
                      : 'border-taupe text-espresso placeholder:text-stone'
                  } focus:outline-none focus:border-gold transition-colors`}
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-charcoal/60 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-cream z-50 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-serif text-2xl tracking-wider">VELMORA</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 -mr-2 text-espresso"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block font-sans text-lg text-espresso hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hairline my-8" />

          <div className="space-y-4">
            <Link
              to="/about"
              className="block font-sans text-stone hover:text-espresso transition-colors"
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className="block font-sans text-stone hover:text-espresso transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/shipping"
              className="block font-sans text-stone hover:text-espresso transition-colors"
            >
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
