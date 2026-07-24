import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#FCFBF7] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em]">VELMORA</Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
            Curating demi-fine jewelry that bridges the gap between luxury and accessibility. Crafted to be treasured, every day.
          </p>
          <div className="flex gap-4 mt-2">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-zinc-300 transition-colors" />
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Shop</h4>
          <Link to="/shop?category=Earrings" className="text-zinc-400 hover:text-white text-sm transition-colors">Earrings</Link>
          <Link to="/shop?category=Necklaces" className="text-zinc-400 hover:text-white text-sm transition-colors">Necklaces</Link>
          <Link to="/shop?category=Huggies" className="text-zinc-400 hover:text-white text-sm transition-colors">Huggies</Link>
          <Link to="/shop" className="text-zinc-400 hover:text-white text-sm transition-colors">New Arrivals</Link>
        </div>

        {/* Column 3: Help */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Help</h4>
          <Link to="/#shipping" className="text-zinc-400 hover:text-white text-sm transition-colors">Shipping & Returns</Link>
          <Link to="/#care" className="text-zinc-400 hover:text-white text-sm transition-colors">Jewelry Care</Link>
          <Link to="/#faq" className="text-zinc-400 hover:text-white text-sm transition-colors">FAQ</Link>
          <Link to="/#contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact Us</Link>
        </div>

        {/* Column 4: Newsletter Placeholder */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-2">Join the Club</h4>
          <p className="text-zinc-400 text-xs">Sign up for early access to new collections and 10% off your first order.</p>
          <div className="flex border-b border-zinc-700 pb-2 mt-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-sm w-full focus:outline-none"
            />
            <button className="text-xs uppercase tracking-widest font-bold">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white">Privacy Policy</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest cursor-pointer hover:text-white">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
