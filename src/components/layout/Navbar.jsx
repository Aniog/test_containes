import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled || !isHome
      ? 'bg-[var(--color-cream)]/95 backdrop-blur-sm shadow-sm'
      : 'bg-transparent'
  }`;

  const linkClasses = `text-xs tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--color-gold-500)] ${
    scrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
  }`;

  const iconClasses = `w-5 h-5 transition-colors duration-300 hover:text-[var(--color-gold-500)] ${
    scrolled || !isHome ? 'text-[var(--color-charcoal)]' : 'text-white'
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="heading-serif text-2xl md:text-3xl tracking-wider">
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link to="/shop" className={linkClasses}>Shop</Link>
              <Link to="/shop?category=earrings" className={linkClasses}>Earrings</Link>
              <Link to="/shop?category=necklaces" className={linkClasses}>Necklaces</Link>
              <Link to="/about" className={linkClasses}>About</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className={iconClasses} aria-label="Search">
                <Search />
              </button>
              <button className={`${iconClasses} relative`} onClick={toggleCart} aria-label="Cart">
                <ShoppingBag />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[var(--color-gold-500)] text-white text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button className={`md:hidden ${iconClasses}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-cream)] pt-20 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            <Link to="/shop" className="heading-serif text-3xl text-[var(--color-charcoal)]">Shop</Link>
            <Link to="/shop?category=earrings" className="heading-serif text-2xl text-[var(--color-velmora-600)]">Earrings</Link>
            <Link to="/shop?category=necklaces" className="heading-serif text-2xl text-[var(--color-velmora-600)]">Necklaces</Link>
            <Link to="/shop?category=huggies" className="heading-serif text-2xl text-[var(--color-velmora-600)]">Huggies</Link>
            <Link to="/about" className="heading-serif text-3xl text-[var(--color-charcoal)]">About</Link>
          </div>
        </div>
      )}
    </>
  );
}
