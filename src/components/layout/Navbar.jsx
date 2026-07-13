import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm border-b border-velmora-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-velmora-dark hover:text-velmora-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Center nav links - desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/shop?category=Earrings">Collections</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/journal">Journal</NavLink>
            </div>

            {/* Logo - center */}
            <Link
              to="/"
              className={`font-serif text-2xl md:text-3xl tracking-super transition-all duration-500 ${
                scrolled ? 'text-velmora-dark' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                className={`transition-colors hover:text-velmora-gold ${scrolled ? 'text-velmora-dark' : 'text-white'}`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className={`relative transition-colors hover:text-velmora-gold ${scrolled ? 'text-velmora-dark' : 'text-white'}`}
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-velmora-gold text-white text-[10px] font-medium flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAF8] md:hidden animate-fade-in">
          <div className="flex items-center justify-between px-6 h-16">
            <Link to="/" className="font-serif text-2xl tracking-super" onClick={() => setMobileOpen(false)}>
              VELMORA
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-velmora-dark" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 pt-8 flex flex-col gap-6">
            <MobileLink to="/shop" onClick={() => setMobileOpen(false)}>Shop</MobileLink>
            <MobileLink to="/shop?category=Earrings" onClick={() => setMobileOpen(false)}>Earrings</MobileLink>
            <MobileLink to="/shop?category=Necklaces" onClick={() => setMobileOpen(false)}>Necklaces</MobileLink>
            <MobileLink to="/shop?category=Huggies" onClick={() => setMobileOpen(false)}>Huggies</MobileLink>
            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
            <MobileLink to="/journal" onClick={() => setMobileOpen(false)}>Journal</MobileLink>
          </div>
        </div>
      )}

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-velmora-dark/70 hover:text-velmora-gold transition-colors duration-300 text-xs"
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="font-serif text-2xl text-velmora-dark border-b border-velmora-border pb-4"
    >
      {children}
    </Link>
  );
}
