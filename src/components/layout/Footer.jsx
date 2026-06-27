import React from 'react';
import { Instagram, Facebook, Twitter, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 px-6 md:px-12 border-t border-black/5 text-carbon">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl tracking-[0.2em] uppercase mb-8">Velmora</h2>
          <p className="font-sans text-xs text-black/50 leading-relaxed max-w-[240px] uppercase tracking-widest mb-10">
            Demi-fine jewelry for your everyday treasures. Crafted with 18k gold plating.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            <Facebook className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
            <Twitter className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8">Shop</h4>
          <ul className="space-y-4 font-sans text-xs uppercase tracking-widest text-black/70 italic">
            <li><a href="/shop" className="hover:text-gold transition-colors">All Jewelry</a></li>
            <li><a href="/shop?category=earrings" className="hover:text-gold transition-colors">Earrings</a></li>
            <li><a href="/shop?category=necklaces" className="hover:text-gold transition-colors">Necklaces</a></li>
            <li><a href="/shop?category=huggies" className="hover:text-gold transition-colors">Huggies</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8">Help</h4>
          <ul className="space-y-4 font-sans text-xs uppercase tracking-widest text-black/70">
            <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Sizing Guide</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Care Instructions</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-sans text-[10px] uppercase tracking-[0.4em] text-black/40 mb-8">Join the inner circle</h4>
          <p className="text-xs font-sans text-black/60 mb-8 tracking-wide">Sign up for 10% off your first order and exclusive access to new launches.</p>
          <form className="relative group">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-b border-black/10 py-3 text-[10px] uppercase tracking-widest focus:border-gold outline-none transition-all placeholder:text-black/30"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 group-hover:text-gold transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/30">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 opacity-20 hover:opacity-100 transition-opacity duration-500">
           {/* Payment icons placeholder */}
           <div className="flex gap-4">
              <div className="w-10 h-6 bg-carbon/10 rounded-sm" />
              <div className="w-10 h-6 bg-carbon/10 rounded-sm" />
              <div className="w-10 h-6 bg-carbon/10 rounded-sm" />
              <div className="w-10 h-6 bg-carbon/10 rounded-sm" />
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
