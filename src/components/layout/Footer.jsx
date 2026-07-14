import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-semibold italic">
            VELMORA
          </Link>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Crafting demi-fine gold jewelry for the modern woman. Designed to be treasured, worn daily, and passed down.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><Link to="/shop" className="hover:text-accent">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-accent">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-accent">Necklaces</Link></li>
            <li><Link to="/shop?category=New" className="hover:text-accent">New Arrivals</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:text-accent">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8">Help</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><a href="#" className="hover:text-accent">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-accent">Jewelry Care</a></li>
            <li><a href="#" className="hover:text-accent">Ring Sizer</a></li>
            <li><a href="#" className="hover:text-accent">Track Your Order</a></li>
            <li><a href="#" className="hover:text-accent">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-light">
            <li><Link to="/about" className="hover:text-accent">Our Story</Link></li>
            <li><a href="#" className="hover:text-accent">Sustainability</a></li>
            <li><a href="#" className="hover:text-accent">Wholesale</a></li>
            <li><a href="#" className="hover:text-accent">Press</a></li>
            <li><a href="#" className="hover:text-accent">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-gray-400 uppercase tracking-widest">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
