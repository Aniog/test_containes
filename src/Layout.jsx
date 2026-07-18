import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from './context/CartContext';
import CartDrawer from './components/ui/CartDrawer';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
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
    { label: 'Journal', path: '/' }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#1a1816]">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.05em]">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                to={link.path}
                className="hover:text-[#c5a26f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/50 rounded-full transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-white/50 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#c5a26f] text-white text-[10px] rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6">
            <div className="flex flex-col gap-4 text-sm tracking-[0.05em]">
              {navLinks.map(link => (
                <Link 
                  key={link.label} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1816] text-[#f5f2ed] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
            {/* Logo */}
            <div>
              <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
              <p className="text-sm text-[#8b7d6b]">Fine Jewelry</p>
            </div>

            {/* Shop */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#8b7d6b]">Shop</div>
              <div className="space-y-2 text-sm">
                <Link to="/shop" className="block hover:text-[#c5a26f]">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-[#c5a26f]">Earrings</Link>
                <Link to="/shop" className="block hover:text-[#c5a26f]">Necklaces</Link>
                <Link to="/shop" className="block hover:text-[#c5a26f]">Huggies</Link>
              </div>
            </div>

            {/* Help */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#8b7d6b]">Help</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#c5a26f]">Shipping</a>
                <a href="#" className="block hover:text-[#c5a26f]">Returns</a>
                <a href="#" className="block hover:text-[#c5a26f]">Care Guide</a>
                <a href="#" className="block hover:text-[#c5a26f]">Contact</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 text-[#8b7d6b]">Company</div>
              <div className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#c5a26f]">Our Story</a>
                <a href="#" className="block hover:text-[#c5a26f]">Journal</a>
                <a href="#" className="block hover:text-[#c5a26f]">Sustainability</a>
                <a href="#" className="block hover:text-[#c5a26f]">Careers</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#2a2724] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8b7d6b]">
            <div>© 2026 Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#c5a26f]">Instagram</a>
              <a href="#" className="hover:text-[#c5a26f]">Pinterest</a>
              <a href="#" className="hover:text-[#c5a26f]">TikTok</a>
            </div>
            <div>Visa · Mastercard · Amex · Apple Pay</div>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
};

export default Layout;