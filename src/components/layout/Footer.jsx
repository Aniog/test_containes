import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-cream border-t border-neutral-100 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] text-velmora-obsidian">
            VELMORA
          </Link>
          <p className="text-neutral-500 text-sm max-w-xs font-sans leading-relaxed">
            Crafting premium demi-fine jewelry for the modern woman. Elevated essentials designed to be treasured every day.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-velmora-obsidian transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-velmora-obsidian transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-velmora-obsidian transition-colors" />
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-obsidian font-bold mb-6">
            Shop
          </h4>
          <ul className="flex flex-col gap-3 text-neutral-500 text-sm">
            <li><Link to="/shop" className="hover:text-velmora-obsidian transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop/earrings" className="hover:text-velmora-obsidian transition-colors">Earrings</Link></li>
            <li><Link to="/shop/necklaces" className="hover:text-velmora-obsidian transition-colors">Necklaces</Link></li>
            <li><Link to="/shop/huggies" className="hover:text-velmora-obsidian transition-colors">Huggies</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-obsidian font-bold mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-neutral-500 text-sm">
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Journal</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Sustainability</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Stockists</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest text-velmora-obsidian font-bold mb-6">
            Help
          </h4>
          <ul className="flex flex-col gap-3 text-neutral-500 text-sm">
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">F.A.Q</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Materials & Care</Link></li>
            <li><Link to="#" className="hover:text-velmora-obsidian transition-colors">Size Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-400 text-xs">
          © {new Date().getFullYear()} VELMORA Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-6 opacity-40 grayscale">
          {/* Mock payment icons */}
          <div className="w-8 h-5 bg-neutral-400 rounded-sm" />
          <div className="w-8 h-5 bg-neutral-400 rounded-sm" />
          <div className="w-8 h-5 bg-neutral-400 rounded-sm" />
          <div className="w-8 h-5 bg-neutral-400 rounded-sm" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
