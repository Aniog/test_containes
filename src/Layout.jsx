import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import { Toaster } from 'sonner';

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
    <div className="min-h-screen bg-[#F8F6F3]">
      <Toaster position="top-center" richColors closeButton />
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#F8F6F3] border-b border-[#E5E0D8]' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="serif text-2xl tracking-[0.2em] text-[#2C2825]">
            VELMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.1em]">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path}
                className="hover:text-[#8B7355] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#8B7355] transition-colors">
              <Search size={18} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-[#8B7355] transition-colors relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8B7355] text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#F8F6F3] border-t border-[#E5E0D8] px-6 py-6">
            <div className="flex flex-col gap-4 text-sm tracking-[0.1em]">
              {navLinks.map((link) => (
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
      <footer className="bg-[#2C2825] text-[#F8F6F3] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 mb-16">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
              <p className="text-sm text-[#A89F8F]">Fine Jewelry</p>
            </div>

            {/* Shop */}
            <div>
              <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A46E]">SHOP</div>
              <div className="space-y-2 text-sm text-[#A89F8F]">
                <Link to="/shop" className="block hover:text-white">All Jewelry</Link>
                <Link to="/shop" className="block hover:text-white">Earrings</Link>
                <Link to="/shop" className="block hover:text-white">Necklaces</Link>
                <Link to="/shop" className="block hover:text-white">Huggies</Link>
              </div>
            </div>

            {/* Help */}
            <div>
              <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A46E]">HELP</div>
              <div className="space-y-2 text-sm text-[#A89F8F]">
                <a href="#" className="block hover:text-white">Shipping</a>
                <a href="#" className="block hover:text-white">Returns</a>
                <a href="#" className="block hover:text-white">Care Guide</a>
                <a href="#" className="block hover:text-white">Contact</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A46E]">COMPANY</div>
              <div className="space-y-2 text-sm text-[#A89F8F]">
                <a href="#" className="block hover:text-white">Our Story</a>
                <a href="#" className="block hover:text-white">Journal</a>
                <a href="#" className="block hover:text-white">Sustainability</a>
                <a href="#" className="block hover:text-white">Careers</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-sm tracking-[0.1em] mb-4 text-[#C5A46E]">FOLLOW</div>
              <div className="space-y-2 text-sm text-[#A89F8F]">
                <a href="#" className="block hover:text-white">Instagram</a>
                <a href="#" className="block hover:text-white">Pinterest</a>
                <a href="#" className="block hover:text-white">TikTok</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#4A4640] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A89F8F]">
            <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="flex gap-3 text-[#C5A46E]">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PP</span>
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
};

export default Layout;