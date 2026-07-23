import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { getItemCount, toggleCart } = useCartStore();
  const location = useLocation();
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wider font-light">
              VELMORA
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wider uppercase transition-colors duration-200 hover:text-primary ${
                    scrolled || !isHome ? 'text-foreground/80' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              <button
                className={`p-2 transition-colors duration-200 hover:text-primary ${
                  scrolled || !isHome ? 'text-foreground/80' : 'text-white/90'
                }`}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                className={`p-2 relative transition-colors duration-200 hover:text-primary ${
                  scrolled || !isHome ? 'text-foreground/80' : 'text-white/90'
                }`}
                onClick={toggleCart}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-20 md:hidden">
          <nav className="flex flex-col items-center gap-8 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <CartDrawer />
    </>
  );
};

export default Navbar;
