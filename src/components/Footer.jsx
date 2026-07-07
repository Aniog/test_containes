import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2] pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-serif text-3xl tracking-[0.2em] mb-6 block">
            VELMORA
          </Link>
          <p className="text-sm font-light text-gray-400 mb-8 max-w-xs leading-relaxed">
            Demi-fine jewelry crafted for the modern woman. Timeless pieces to be treasured for a lifetime.
          </p>
          <div className="flex space-x-5">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-[#C5A059] transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-8">Shop</h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li><Link to="/shop?category=Necklaces" className="hover:text-[#F9F7F2] transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-[#F9F7F2] transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-[#F9F7F2] transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-[#F9F7F2] transition-colors">Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-8">Help</h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li><Link to="/shipping" className="hover:text-[#F9F7F2] transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-[#F9F7F2] transition-colors">Materials & Care</Link></li>
            <li><Link to="/contact" className="hover:text-[#F9F7F2] transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-[#F9F7F2] transition-colors">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-8">Company</h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li><Link to="/about" className="hover:text-[#F9F7F2] transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-[#F9F7F2] transition-colors">Journal</Link></li>
            <li><Link to="/terms" className="hover:text-[#F9F7F2] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#F9F7F2] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500 space-y-4 md:space-y-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
