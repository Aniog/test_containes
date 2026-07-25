import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-serif tracking-[0.3em] mb-6">VELMORA</h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light tracking-wide">
            Crafting demi-fine jewelry that captures the essence of quiet luxury. Designed in London, worn worldwide.
          </p>
          <div className="flex space-x-6 mt-8">
            <Instagram className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-white/40 hover:text-gold cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif uppercase tracking-[0.2em] text-xs mb-8 text-gold">Shop</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-[0.2em] text-xs mb-8 text-gold">Help</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><button className="hover:text-white transition-colors">Shipping & Returns</button></li>
            <li><button className="hover:text-white transition-colors">Track Your Order</button></li>
            <li><button className="hover:text-white transition-colors">Jewelry Care</button></li>
            <li><button className="hover:text-white transition-colors">Contact Us</button></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-[0.2em] text-xs mb-8 text-gold">Company</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><button className="hover:text-white transition-colors">Our Story</button></li>
            <li><button className="hover:text-white transition-colors">Sustainability</button></li>
            <li><button className="hover:text-white transition-colors">Press</button></li>
            <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/30 space-y-4 md:space-y-0">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Apple Pay</span>
          <span>Amex</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
