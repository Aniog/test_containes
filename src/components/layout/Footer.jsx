import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A150E] text-[#FAF9F6] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-3xl font-serif tracking-[0.2em] mb-6 block">VELMORA</Link>
          <p className="text-sm text-[#A69B8F] leading-relaxed max-w-xs font-sans">
            Crafted for the modern woman, Velmora brings you premium demi-fine jewelry designed for everyday luxury and special moments alike.
          </p>
          <div className="flex gap-4 mt-6">
            <Instagram size={18} className="cursor-pointer hover:text-[#C5A059] transition-colors" />
            <Facebook size={18} className="cursor-pointer hover:text-[#C5A059] transition-colors" />
            <Twitter size={18} className="cursor-pointer hover:text-[#C5A059] transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-6 uppercase">Shop</h4>
          <ul className="space-y-4 text-sm text-[#A69B8F] font-sans">
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-6 uppercase">Help</h4>
          <ul className="space-y-4 text-sm text-[#A69B8F] font-sans">
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/sizing" className="hover:text-white transition-colors">Sizing Guide</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-serif text-lg tracking-widest mb-6 uppercase">Company</h4>
          <ul className="space-y-4 text-sm text-[#A69B8F] font-sans">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><Link to="/ethics" className="hover:text-white transition-colors">Ethical Standards</Link></li>
            <li><Link to="/wholesale" className="hover:text-white transition-colors">Wholesale</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#A69B8F]/20 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-[#A69B8F] uppercase tracking-widest font-sans">
          © {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6 items-center">
            {/* Payment icons placeholders */}
            <div className="h-5 w-8 bg-[#A69B8F]/20 rounded" />
            <div className="h-5 w-8 bg-[#A69B8F]/20 rounded" />
            <div className="h-5 w-8 bg-[#A69B8F]/20 rounded" />
            <div className="h-5 w-8 bg-[#A69B8F]/20 rounded" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
