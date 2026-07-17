import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest text-[#C5A059]">VELMORA</h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Crafting timeless, demi-fine jewelry for the modern woman. Quiet luxury, designed to be treasured every day.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-neutral-400 hover:text-[#C5A059] cursor-pointer" />
              <Facebook className="w-5 h-5 text-neutral-400 hover:text-[#C5A059] cursor-pointer" />
              <Twitter className="w-5 h-5 text-neutral-400 hover:text-[#C5A059] cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link to="/collections/earrings" className="hover:text-[#C5A059]">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-[#C5A059]">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-[#C5A059]">Huggies</Link></li>
              <li><Link to="/collections/new-arrivals" className="hover:text-[#C5A059]">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link to="/shipping" className="hover:text-[#C5A059]">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-[#C5A059]">Care Guide</Link></li>
              <li><Link to="/faq" className="hover:text-[#C5A059]">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A059]">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link to="/about" className="hover:text-[#C5A059]">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#C5A059]">The Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#C5A059]">Sustainability</Link></li>
              <li><Link to="/wholesale" className="hover:text-[#C5A059]">Wholesale</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-neutral-400">
          <p>© 2024 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span>Privary Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="flex space-x-4">
             {/* Payment Icons Placeholder */}
             <div className="w-8 h-5 bg-neutral-100 rounded"></div>
             <div className="w-8 h-5 bg-neutral-100 rounded"></div>
             <div className="w-8 h-5 bg-neutral-100 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
