import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div>
          <h3 className="text-xl font-serif tracking-widest uppercase mb-6">VELMORA</h3>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. 
            Crafted with 18K gold plating and thoughtful details.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest-extra mb-6 opacity-60">Shop</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest-extra mb-6 opacity-60">Help</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-accent transition-colors">Care Guide</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest-extra mb-6 opacity-60">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 gap-6">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} VELMORA Fine Jewelry. All rights reserved.
        </p>
        <div className="flex space-x-8">
          {/* Mock payment icons */}
          <div className="text-[10px] uppercase tracking-widest opacity-40">Visa</div>
          <div className="text-[10px] uppercase tracking-widest opacity-40">Mastercard</div>
          <div className="text-[10px] uppercase tracking-widest opacity-40">Amex</div>
          <div className="text-[10px] uppercase tracking-widest opacity-40">Paypal</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
