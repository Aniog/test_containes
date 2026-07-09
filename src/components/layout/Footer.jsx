import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-xl font-serif tracking-widest text-[#1a1a1a]">
            VELMORA
          </Link>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Refined demi-fine jewelry designed for the modern woman. Quiet luxury crafted to be treasured.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-stone-400 hover:text-[#9a7b4f] cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-stone-400 hover:text-[#9a7b4f] cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-stone-400 hover:text-[#9a7b4f] cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><Link to="/shop?category=Earrings" className="hover:text-stone-900 transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-stone-900 transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-stone-900 transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-stone-900 transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><Link to="/shipping" className="hover:text-stone-900 transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/contact" className="hover:text-stone-900 transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-stone-900 transition-colors">FAQs</Link></li>
            <li><Link to="/care" className="hover:text-stone-900 transition-colors">Materials & Care</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-stone-500 font-sans">
            <li><Link to="/about" className="hover:text-stone-900 transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-stone-900 transition-colors">Journal</Link></li>
            <li><Link to="/wholesale" className="hover:text-stone-900 transition-colors">Wholesale</Link></li>
            <li><Link to="/terms" className="hover:text-stone-900 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-stone-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-stone-400 font-sans">
        <p>&copy; 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
