import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-1">
          <Link to="/" className="text-3xl font-serif tracking-widestest mb-6 block">VELMORA</Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            Demin-fine jewelry crafted for the modern woman. Quiet luxury, timeless designs, and ethical craftsmanship.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Pinterest size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-serif tracking-widest uppercase mb-6">Shop</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/shop" className="text-zinc-400 hover:text-white text-sm transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="text-zinc-400 hover:text-white text-sm transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="text-zinc-400 hover:text-white text-sm transition-colors">Necklaces</Link></li>
            <li><Link to="/collections" className="text-zinc-400 hover:text-white text-sm transition-colors">Curated Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-serif tracking-widest uppercase mb-6">Help</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Jewelry Care</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">FAQs</a></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-serif tracking-widest uppercase mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">Our Story</Link></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Ethics & Sustainability</a></li>
            <li><Link to="/journal" className="text-zinc-400 hover:text-white text-sm transition-colors">The Journal</Link></li>
            <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Stockists</a></li>
          </ul>
        </div>
      </div>

      <div className="hairline-border border-zinc-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 grayscale opacity-50">
           {/* Placeholder payment icons */}
           <div className="w-8 h-5 bg-zinc-600 rounded"></div>
           <div className="w-8 h-5 bg-zinc-600 rounded"></div>
           <div className="w-8 h-5 bg-zinc-600 rounded"></div>
           <div className="w-8 h-5 bg-zinc-600 rounded"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
