import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-[0.3em] text-luxury-black mb-8 block">
              VELMORA
            </Link>
            <p className="text-luxury-black/60 text-sm font-light leading-relaxed max-w-xs">
              Demi-fine jewelry for the modern woman. Quiet luxury, timeless design, and exceptional quality crafted for everyday wear.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-sm text-luxury-black/70 font-light">
              <li><Link to="/shop" className="hover:text-gold-600 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="hover:text-gold-600 transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-gold-600 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-gold-600 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Help</h4>
            <ul className="space-y-4 text-sm text-luxury-black/70 font-light">
              <li><Link to="/shipping" className="hover:text-gold-600 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-gold-600 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-gold-600 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Follow Us</h4>
            <div className="flex space-x-6 mb-8">
              <a href="#" className="text-luxury-black hover:text-gold-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-luxury-black hover:text-gold-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-luxury-black hover:text-gold-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-luxury-black/40">
            © 2026 Velmora Fine Jewelry. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
