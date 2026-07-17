import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Crafting demi-fine jewelry that captures the essence of quiet luxury. Designed for the modern woman who appreciates the finer things.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase text-xs font-bold">Shop</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/shop/earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop/necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop/huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase text-xs font-bold">Help</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 tracking-widest uppercase text-xs font-bold">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/stockists" className="hover:text-white transition-colors">Stockists</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex space-x-4 grayscale opacity-50">
          {/* Payment Icons Placeholder */}
          <span className="text-[10px] border border-white/20 px-2 py-1 rounded">VISA</span>
          <span className="text-[10px] border border-white/20 px-2 py-1 rounded">MASTERCARD</span>
          <span className="text-[10px] border border-white/20 px-2 py-1 rounded">AMEX</span>
          <span className="text-[10px] border border-white/20 px-2 py-1 rounded">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
