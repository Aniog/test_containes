import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted px-6 py-24 md:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border/40 pb-24">
        {/* Brand */}
        <div>
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase mb-8 block">
            VELMORA
          </Link>
          <p className="text-sm font-light leading-relaxed text-muted-foreground italic mb-8">
            Demi-fine jewelry crafted for the modern woman. Timeless, sustainable, and designed to be treasured.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-60 transition-opacity"><Instagram className="w-5 h-5 stroke-[1.5px]" /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Facebook className="w-5 h-5 stroke-[1.5px]" /></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><Twitter className="w-5 h-5 stroke-[1.5px]" /></a>
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-widest font-semibold">Shop</h4>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide text-muted-foreground uppercase">
            <Link to="/shop" className="hover:text-black transition-colors">All Jewelry</Link>
            <Link to="/shop?category=earrings" className="hover:text-black transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-black transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-black transition-colors">Huggies</Link>
            <Link to="/shop" className="hover:text-black transition-colors">Gifting</Link>
          </div>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-widest font-semibold">Help</h4>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide text-muted-foreground uppercase">
            <a href="#" className="hover:text-black transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-black transition-colors">Size Guide</a>
            <a href="#" className="hover:text-black transition-colors">Care Instructions</a>
            <a href="#" className="hover:text-black transition-colors">Order Tracking</a>
            <a href="#" className="hover:text-black transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-6">
          <h4 className="text-[10px] uppercase tracking-widest font-semibold">Company</h4>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide text-muted-foreground uppercase">
            <Link to="/about" className="hover:text-black transition-colors">Our Story</Link>
            <Link to="/journal" className="hover:text-black transition-colors">Journal</Link>
            <a href="#" className="hover:text-black transition-colors">Stockists</a>
            <a href="#" className="hover:text-black transition-colors">Sustainability</a>
            <a href="#" className="hover:text-black transition-colors">Careers</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-widest text-muted-foreground font-medium">
        <div className="flex gap-8">
          <span>&copy; 2026 Velmora Fine Jewelry</span>
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-5 bg-black/5 rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all border border-black/10 flex items-center justify-center text-[6px]">VISA</div>
          <div className="w-8 h-5 bg-black/5 rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all border border-black/10 flex items-center justify-center text-[6px]">AMEX</div>
          <div className="w-8 h-5 bg-black/5 rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all border border-black/10 flex items-center justify-center text-[6px]">PPAL</div>
          <div className="w-8 h-5 bg-black/5 rounded-sm opacity-50 grayscale hover:grayscale-0 transition-all border border-black/10 flex items-center justify-center text-[6px]">APAY</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
