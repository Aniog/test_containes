import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest block">VELMORA</Link>
          <p className="text-sm text-secondary/60 leading-relaxed max-w-xs">
            Timeless demi-fine jewelry crafted for the modern woman. Elevating the everyday through ethical luxury.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
            <Facebook className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
            <Twitter className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-medium mb-8">Shop</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><Link to="/shop?category=earrings" className="hover:text-secondary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-secondary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-secondary transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-secondary transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-medium mb-8">Help</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><Link to="/shipping" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
            <li><Link to="/size-guide" className="hover:text-secondary transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-xs uppercase tracking-[0.3em] font-medium mb-8">Company</h4>
          <ul className="space-y-4 text-sm text-secondary/60">
            <li><Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
            <li><Link to="/sustainability" className="hover:text-secondary transition-colors">Sustainability</Link></li>
            <li><Link to="/journal" className="hover:text-secondary transition-colors">The Journal</Link></li>
            <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-secondary/10 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-secondary/40">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
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
