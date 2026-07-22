import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-sand/50 pt-20 pb-10 border-t">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-widestest">
            VELMORA
          </Link>
          <p className="text-sm text-gray-500 font-serif italic max-w-xs">
            Timeless jewelry for the modern woman. Ethically sourced, meticulously crafted.
          </p>
          <div className="flex space-x-6 text-brand-charcoal">
            <Instagram size={18} className="cursor-pointer hover:text-brand-gold transition-colors" />
            <Facebook size={18} className="cursor-pointer hover:text-brand-gold transition-colors" />
            <Twitter size={18} className="cursor-pointer hover:text-brand-gold transition-colors" />
            <Mail size={18} className="cursor-pointer hover:text-brand-gold transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-8">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest text-[9px]">
            <li><Link to="/shop?category=earrings" className="hover:text-brand-charcoal transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-brand-charcoal transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=new-arrivals" className="hover:text-brand-charcoal transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop?category=bestsellers" className="hover:text-brand-charcoal transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-8">Help</h4>
          <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest text-[9px]">
            <li><Link to="/shipping" className="hover:text-brand-charcoal transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-brand-charcoal transition-colors">Jewelry Care</Link></li>
            <li><Link to="/faq" className="hover:text-brand-charcoal transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-brand-charcoal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widestest font-bold mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest text-[9px]">
            <li><Link to="/about" className="hover:text-brand-charcoal transition-colors">Our Story</Link></li>
            <li><Link to="/sustainability" className="hover:text-brand-charcoal transition-colors">Sustainability</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-charcoal transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-charcoal transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20 pt-10 border-t flex flex-col md:row items-center justify-between text-[10px] text-gray-400 uppercase tracking-widestest">
        <p>© 2026 Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex items-center space-x-6 mt-6 md:mt-0 opacity-50">
          <span className="border border-gray-400 px-2 py-1 rounded-sm">VISA</span>
          <span className="border border-gray-400 px-2 py-1 rounded-sm">MC</span>
          <span className="border border-gray-400 px-2 py-1 rounded-sm">AMEX</span>
          <span className="border border-gray-400 px-2 py-1 rounded-sm">PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
