import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-xs tracking-widest uppercase transition-colors duration-300 ${
      isActive
        ? 'text-velmora-gold'
        : scrolled
          ? 'text-velmora-charcoal hover:text-velmora-gold'
          : 'text-white/90 hover:text-white'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-velmora-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className={`w-5 h-5 ${scrolled ? 'text-velmora-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${scrolled ? 'text-velmora-charcoal' : 'text-white'}`} />
            )}
          </button>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <NavLink to="/shop" className={linkClass}>Shop</NavLink>
            <NavLink to="/shop?category=earrings" className={linkClass}>Earrings</NavLink>
            <NavLink to="/shop?category=necklaces" className={linkClass}>Necklaces</NavLink>
            <NavLink to="/shop?category=huggies" className={linkClass}>Huggies</NavLink>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl tracking-[0.15em] transition-colors duration-300 ${
              scrolled ? 'text-velmora-charcoal' : 'text-white'
            }`}
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Search"
              className={`p-1 transition-colors duration-300 ${
                scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className={`relative p-1 transition-colors duration-300 ${
                scrolled ? 'text-velmora-charcoal hover:text-velmora-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4 md:w-[18px] md:h-[18px]" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] flex items-center justify-center bg-velmora-gold text-white text-[10px] font-medium rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            <NavLink to="/shop" className={linkClass} onClick={() => setMobileOpen(false)}>Shop</NavLink>
            <NavLink to="/shop?category=earrings" className={linkClass} onClick={() => setMobileOpen(false)}>Earrings</NavLink>
            <NavLink to="/shop?category=necklaces" className={linkClass} onClick={() => setMobileOpen(false)}>Necklaces</NavLink>
            <NavLink to="/shop?category=huggies" className={linkClass} onClick={() => setMobileOpen(false)}>Huggies</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
