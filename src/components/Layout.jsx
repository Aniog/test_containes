import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2] shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-2xl tracking-[0.2em] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                  className={`text-sm tracking-[0.15em] uppercase ${
                    isScrolled ? 'text-[#2C2C2C]' : 'text-white'
                  } hover:opacity-70 transition-opacity`}
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <button
                className={`${
                  isScrolled ? 'text-[#2C2C2C]' : 'text-white'
                } hover:opacity-70 transition-opacity`}
              >
                <Search size={20} />
              </button>
              
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative ${
                  isScrolled ? 'text-[#2C2C2C]' : 'text-white'
                } hover:opacity-70 transition-opacity`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden ${
                  isScrolled ? 'text-[#2C2C2C]' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#E8DDD0]">
            <div className="px-6 py-8 space-y-6">
              {['Shop', 'Collections', 'About', 'Journal'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Shop' ? '/shop' : `/${link.toLowerCase()}`}
                  className="block text-[#2C2C2C] text-sm tracking-[0.15em] uppercase hover:text-[#C9A96E] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 lg:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-[#FAF7F2] py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
            {/* Logo and Description */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl tracking-[0.2em]">VELMORA</h3>
              <p className="text-sm leading-relaxed opacity-80">
                Fine jewelry crafted to be treasured. Each piece is designed with intention, 
                made with care, and meant to be worn and loved for years to come.
              </p>
            </div>

            {/* Shop Links */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-[0.15em] uppercase opacity-90">Shop</h4>
              <ul className="space-y-3">
                {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'].map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Links */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-[0.15em] uppercase opacity-90">Help</h4>
              <ul className="space-y-3">
                {['FAQ', 'Shipping & Returns', 'Care Guide', 'Contact Us', 'Track Order'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-sm tracking-[0.15em] uppercase opacity-90">Company</h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 lg:mt-20 pt-8 border-t border-[#E8DDD0]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-60">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social) => (
                <a key={social} href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
