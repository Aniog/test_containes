import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2D2B2A] text-white pt-16 pb-8 border-t border-[#3A3837]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] mb-6 block">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Fine jewelry crafted to be treasured. Demi-fine gold pieces for everyday elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C6A87C] transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" className="text-gray-400 hover:text-[#C6A87C] transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" className="text-gray-400 hover:text-[#C6A87C] transition-colors"><Twitter className="w-5 h-5 stroke-[1.5]" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#3A3837] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Payment icons placeholder */}
            <span className="sr-only">Accepted Payments</span>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-gray-800 rounded"></div>
              <div className="w-8 h-5 bg-gray-800 rounded"></div>
              <div className="w-8 h-5 bg-gray-800 rounded"></div>
              <div className="w-8 h-5 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;