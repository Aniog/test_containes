import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Share2, Send, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-3xl font-serif tracking-[0.2em] font-bold">
            VELMORA
          </Link>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Premium demi-fine jewelry designed for the modern woman. 
            Crafted with intention, treasures to last a lifetime.
          </p>
          <div className="flex gap-4">
            <Share2 size={20} className="hover:text-gold cursor-pointer transition-colors" />
            <Send size={20} className="hover:text-gold cursor-pointer transition-colors" />
            <Mail size={20} className="hover:text-gold cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">SHOP</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">HELP</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h4 className="font-serif text-lg tracking-widest border-b border-white/10 pb-2 inline-block self-start">JOURNAL</h4>
          <p className="text-white/60 text-sm">Join for 10% off your first order and stay updated on new releases.</p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-white/20 py-2 text-sm focus:border-gold outline-none transition-colors"
            />
            <Button variant="outline" className="mt-2 border-white text-white hover:bg-white hover:text-black">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-white/40 tracking-widest uppercase">
          © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 opacity-40 grayscale contrast-125">
           {/* Mock Payment Icons */}
           <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
           <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
           <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
           <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
