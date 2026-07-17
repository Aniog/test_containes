import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-velmora-stone py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-serif tracking-widest uppercase mb-6">Velmora</h2>
          <p className="text-sm font-light leading-relaxed max-w-xs opacity-70">
            Timeless demi-fine jewelry designed for the modern woman. 
            Each piece is crafted with care to be treasured for a lifetime.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h3>
          <ul className="flex flex-col gap-4 text-sm font-light opacity-70">
            <li><Link to="/shop" className="hover:opacity-100">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:opacity-100">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:opacity-100">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:opacity-100">Huggies</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:opacity-100">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Help</h3>
          <ul className="flex flex-col gap-4 text-sm font-light opacity-70">
            <li><Link to="/shipping" className="hover:opacity-100">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:opacity-100">Materials & Care</Link></li>
            <li><Link to="/faq" className="hover:opacity-100">FAQ</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Connect</h3>
          <div className="flex gap-6 mb-8">
            <a href="#" className="hover:text-velmora-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-velmora-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-velmora-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-velmora-gold transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          <p className="text-xs uppercase tracking-widest font-medium mb-4">Newsletter</p>
          <div className="flex border-b border-velmora-stone/30 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none text-sm font-light focus:outline-none flex-1 placeholder:opacity-30"
            />
            <button className="text-xs uppercase tracking-widest font-bold hover:text-velmora-gold transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-velmora-stone/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest opacity-40">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 opacity-40">
          {/* Mock payment icons */}
          <div className="w-8 h-5 bg-velmora-stone/20 rounded-sm"></div>
          <div className="w-8 h-5 bg-velmora-stone/20 rounded-sm"></div>
          <div className="w-8 h-5 bg-velmora-stone/20 rounded-sm"></div>
          <div className="w-8 h-5 bg-velmora-stone/20 rounded-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
