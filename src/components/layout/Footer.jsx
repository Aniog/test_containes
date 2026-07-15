import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-widest text-white">VELMORA</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-brand-gold transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-brand-gold transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-brand-gold transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm hover:text-brand-gold transition-colors duration-300">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-brand-gold transition-colors duration-300">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-brand-gold transition-colors duration-300">About Us</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-brand-gold transition-colors duration-300">Journal</Link></li>
              <li><span className="text-sm cursor-default">Shipping & Returns</span></li>
              <li><span className="text-sm cursor-default">Contact</span></li>
              <li><span className="text-sm cursor-default">FAQ</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-sm cursor-default">Our Story</span></li>
              <li><span className="text-sm cursor-default">Sustainability</span></li>
              <li><span className="text-sm cursor-default">Press</span></li>
              <li><span className="text-sm cursor-default">Careers</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Instagram size={18} className="text-white/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer" />
            <Facebook size={18} className="text-white/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer" />
            <Twitter size={18} className="text-white/60 hover:text-brand-gold transition-colors duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
