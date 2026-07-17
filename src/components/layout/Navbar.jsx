import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart, useCartDispatch } from '../../context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { toggleCart } = useCartDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const bg = scrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = scrolled ? 'text-brand-ink' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="mx-auto flex items-center justify-between px-6 lg:px-12 h-16 md:h-20">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className={`md:hidden ${textColor}`}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center nav links - desktop */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.2em] uppercase">
          <Link to="/shop" className={`hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-smoke' : 'text-white/80'}`}>Shop</Link>
          <Link to="/shop?category=Earrings" className={`hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-smoke' : 'text-white/80'}`}>Earrings</Link>
          <Link to="/shop?category=Necklaces" className={`hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-smoke' : 'text-white/80'}`}>Necklaces</Link>
          <Link to="/shop?category=Huggies" className={`hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-smoke' : 'text-white/80'}`}>Huggies</Link>
        </div>

        {/* Logo center */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span className={`font-serif text-2xl md:text-[28px] tracking-[0.25em] ${textColor} transition-colors duration-500`}>
            VELMORA
          </span>
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className={`${textColor} transition-colors`} aria-label="Search">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button onClick={() => toggleCart()} className={`${textColor} relative transition-colors`} aria-label="Cart">
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile slide-out */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-cream p-8 flex flex-col gap-8 shadow-2xl">
            <button onClick={() => setMobileOpen(false)} className="self-end text-brand-ink" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col gap-6 font-sans text-xs tracking-[0.2em] uppercase text-brand-smoke">
              <Link to="/shop">Shop All</Link>
              <Link to="/shop?category=Earrings">Earrings</Link>
              <Link to="/shop?category=Necklaces">Necklaces</Link>
              <Link to="/shop?category=Huggies">Huggies</Link>
              <Link to="/shop?category=Sets">Sets</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}