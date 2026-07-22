import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/' },
    { label: 'Journal', path: '/' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F3] border-b border-[#E5E0D8]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-[#2C2825]">
            VELMORA
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="hover:text-[#B89778] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-[#B89778] transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-[#B89778] transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#B89778] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#E5E0D8] bg-[#F8F6F3]">
            <div className="max-w-[1400px] mx-auto px-6 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our collection..."
                  className="w-full bg-white border border-[#E5E0D8] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1A1816] text-[#F8F6F3] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-[#3A3632]">
            {/* Logo */}
            <div>
              <div className="font-serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
              <p className="text-sm text-[#6B6560]">Fine Jewelry</p>
            </div>

            {/* Shop */}
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Shop</div>
              <div className="space-y-2 text-sm text-[#B8B0A8]">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-white">Earrings</Link>
                <Link to="/shop" className="block hover:text-white">Necklaces</Link>
                <Link to="/shop" className="block hover:text-white">Huggies</Link>
              </div>
            </div>

            {/* Help */}
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Help</div>
              <div className="space-y-2 text-sm text-[#B8B0A8]">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-xs tracking-[0.15em] uppercase mb-4">Company</div>
              <div className="space-y-2 text-sm text-[#B8B0A8]">
                <a href="#" className="block hover:text-white">Our Story</a>
                <a href="#" className="block hover:text-white">Journal</a>
                <a href="#" className="block hover:text-white">Sustainability</a>
                <a href="#" className="block hover:text-white">Stockists</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6560]">
            <div>© {new Date().getFullYear()} Velmora. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Pinterest</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
            <div>Visa · Mastercard · Amex · Apple Pay</div>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer />
    </div>
  );
};

export default Layout;