import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-gray-100 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-light mb-6 block">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
            Crafting demi-fine jewelry for the modern woman. Quiet luxury, crafted to be treasured for a lifetime.
          </p>
          <div className="flex gap-4">
            <Instagram size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
            <Facebook size={18} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Help</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
            <li><Link to="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Care Guide</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Size Guide</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs tracking-[0.2em] font-medium uppercase mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm font-light text-muted-foreground">
            <li><Link to="#" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Journal</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Stockists</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] tracking-widest text-gray-400 uppercase">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 items-center text-[10px] tracking-widest text-gray-400 uppercase font-medium">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Paypal</span>
        </div>
      </div>
    </footer>
  );
}
