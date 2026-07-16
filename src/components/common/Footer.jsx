import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Logo and About */}
        <div className="flex flex-col space-y-6">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
            VELMORA
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. Crafted with care, made to be treasured.
          </p>
          <div className="flex space-x-5 pt-2">
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="uppercase-spaced text-[10px] font-semibold mb-6">Shop</h4>
          <ul className="flex flex-col space-y-3">
            <li><Link to="/shop?category=earrings" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">All Products</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="uppercase-spaced text-[10px] font-semibold mb-6">Help</h4>
          <ul className="flex flex-col space-y-3">
            <li><Link to="/shipping" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Jewelry Care</Link></li>
            <li><Link to="/faq" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="uppercase-spaced text-[10px] font-semibold mb-6">Company</h4>
          <ul className="flex flex-col space-y-3">
            <li><Link to="/about" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Journal</Link></li>
            <li><Link to="/terms" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-[#C5A059] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          © {currentYear} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6 opacity-40 grayscale">
          {/* Payment icons could go here */}
          <span className="text-[10px] uppercase font-bold tracking-tighter">Visa</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Mastercard</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Amex</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
