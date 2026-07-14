import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif tracking-widest">VELMORA</h2>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs font-sans">
            Crafting demi-fine jewelry for the modern woman. Timeless designs intended to be treasured for a lifetime.
          </p>
          <div className="flex gap-4">
            <Instagram size={18} className="text-muted-foreground cursor-pointer hover:text-foreground" />
            <Facebook size={18} className="text-muted-foreground cursor-pointer hover:text-foreground" />
            <Twitter size={18} className="text-muted-foreground cursor-pointer hover:text-foreground" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.2em] mb-6">Shop</h3>
          <ul className="space-y-4 text-xs text-muted-foreground font-sans uppercase tracking-widest">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.2em] mb-6">Help</h3>
          <ul className="space-y-4 text-xs text-muted-foreground font-sans uppercase tracking-widest">
            <li><Link to="#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-sans uppercase tracking-[0.2em] mb-6">Stay Connected</h3>
          <p className="text-xs text-muted-foreground mb-6 font-sans">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex border-b border-border pb-2 group focus-within:border-foreground transition-colors">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full font-serif"
            />
            <button className="text-muted-foreground hover:text-foreground">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-muted-foreground tracking-[0.1em] uppercase font-sans">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 grayscale opacity-60">
          <span className="text-[10px] font-sans font-bold tracking-tighter">PAYPAL</span>
          <span className="text-[10px] font-sans font-bold tracking-tighter">VISA</span>
          <span className="text-[10px] font-sans font-bold tracking-tighter">MASTERCARD</span>
          <span className="text-[10px] font-sans font-bold tracking-tighter">APPLE PAY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
