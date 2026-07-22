import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-[0_1px_0_#2A2A2A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#F5F0EB]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.15em] text-[#F5F0EB] hover:text-[#C9A96E] transition-colors"
          >
            VELMORA
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/shop" className="text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors">
              Shop
            </Link>
            <Link to="/shop" className="text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors">
              Collections
            </Link>
            <Link to="/" className="text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors">
              About
            </Link>
            <Link to="/" className="text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB] transition-colors">
              Journal
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button aria-label="Search" className="text-[#A0988E] hover:text-[#F5F0EB] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="relative text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-[#0F0F0F] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 bg-[#0F0F0F] border-t border-[#2A2A2A] space-y-5">
          <Link to="/shop" className="block text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB]" onClick={() => setMobileOpen(false)}>Shop</Link>
          <Link to="/shop" className="block text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB]" onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link to="/" className="block text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB]" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/" className="block text-sm tracking-widest uppercase text-[#A0988E] hover:text-[#F5F0EB]" onClick={() => setMobileOpen(false)}>Journal</Link>
        </div>
      </div>
    </nav>
  );
}