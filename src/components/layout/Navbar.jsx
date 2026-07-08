import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = ({ onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navClass = scrolled ? 'bg-brand-surface/90 backdrop-blur-md shadow-sm' : 'bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="container-narrow flex items-center justify-between py-4">
        <button className="md:hidden p-2 -ml-2 text-brand-ink" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-widest text-brand-ink">
          VELMORA
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-brand-ink">
          <Link to="/shop" className="hover:text-brand-accent transition-colors">Shop</Link>
          <Link to="/shop?category=earrings" className="hover:text-brand-accent transition-colors">Earrings</Link>
          <Link to="/shop?category=necklaces" className="hover:text-brand-accent transition-colors">Necklaces</Link>
          <Link to="/shop?category=huggies" className="hover:text-brand-accent transition-colors">Huggies</Link>
          <Link to="/about" className="hover:text-brand-accent transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button onClick={onOpenCart} className="relative p-2 text-brand-ink hover:text-brand-accent transition-colors" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-line">
          <div className="container-narrow flex flex-col gap-4 py-6 text-sm font-medium tracking-wide text-brand-ink">
            <Link to="/shop" className="py-2">Shop All</Link>
            <Link to="/shop?category=earrings" className="py-2">Earrings</Link>
            <Link to="/shop?category=necklaces" className="py-2">Necklaces</Link>
            <Link to="/shop?category=huggies" className="py-2">Huggies</Link>
            <Link to="/about" className="py-2">About</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
