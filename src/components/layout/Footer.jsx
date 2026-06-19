import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FDFCFB] border-t border-stone-200 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-stone-500 max-w-xs leading-relaxed">
              Timeless demi-fine jewelry designed for the modern woman. Elevated essentials crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-[#1A1A1A]">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-[#1A1A1A]">Company</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Our Story</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Journal</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-[#1A1A1A]">Help</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Size Guide</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">Materials & Care</Link></li>
              <li><Link to="#" className="text-sm text-stone-500 hover:text-[#B08D57] transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-6">
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-[#B08D57] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-stone-400 hover:text-[#B08D57] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-stone-400 hover:text-[#B08D57] transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
          <p className="text-[10px] text-stone-400 uppercase tracking-widest text-center">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-4">
            {/* Payment icons placeholders */}
            <div className="w-8 h-5 bg-stone-100 rounded"></div>
            <div className="w-8 h-5 bg-stone-100 rounded"></div>
            <div className="w-8 h-5 bg-stone-100 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
