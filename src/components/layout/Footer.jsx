import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white pt-16 pb-8 border-t border-[#292524]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h2>
            <p className="text-[#a8a29e] text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Elevated everyday essentials for the modern muse.
            </p>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm font-medium mb-6 text-[#d6d3d1]">Shop</h3>
            <ul className="space-y-4 text-sm text-[#a8a29e]">
              <li><Link to="/collections/all" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/collections/all" className="hover:text-white transition-colors">Gifts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm font-medium mb-6 text-[#d6d3d1]">Help</h3>
            <ul className="space-y-4 text-sm text-[#a8a29e]">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm font-medium mb-6 text-[#d6d3d1]">Connect</h3>
            <ul className="space-y-4 text-sm text-[#a8a29e]">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#292524] text-xs text-[#a8a29e]">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
