import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-serif text-3xl font-medium tracking-[0.2em] uppercase block mb-6">
            VELMORA
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs pr-4">
            Demi-fine jewelry crafted to be treasured. Elevated essentials for the modern muse.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 font-semibold">Shop</h4>
          <ul className="space-y-4 font-serif text-lg text-gray-200">
            <li><Link to="/collections/all" className="hover:text-primary transition-colors">All Jewelry</Link></li>
            <li><Link to="/collections/earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/collections/necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/collections/bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 font-semibold">Help</h4>
          <ul className="space-y-4 font-serif text-lg text-gray-200">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 font-semibold">Social</h4>
          <ul className="space-y-4 font-serif text-lg text-gray-200">
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
