import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="font-serif text-2xl tracking-widest block mb-6">VELMORA</Link>
          <p className="text-sm text-gray-400 font-light max-w-xs mb-6">
            Demi-fine jewelry crafted to be treasured. Everyday luxury designed for the modern muse.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
              <span className="sr-only">Instagram</span>
              IG
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
              <span className="sr-only">Pinterest</span>
              PT
            </div>
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
              <span className="sr-only">TikTok</span>
              TK
            </div>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:text-white transition-colors">Sets & Bundles</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light">
            <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Join The List</h4>
          <p className="text-sm text-gray-400 font-light mb-4">
            Sign up for 10% off your first order and exclusive access to new arrivals.
          </p>
          <form className="flex border-b border-gray-600 pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none flex-grow text-sm text-white placeholder-gray-500"
            />
            <button type="button" className="text-sm uppercase tracking-widest hover:text-[var(--color-brand-gold)] transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pb-16 md:pb-0">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-white">Privacy Policy</Link>
          <Link to="/" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
