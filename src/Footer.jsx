import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-bold">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm font-light max-w-xs leading-relaxed">
            Demi-fine jewelry crafted for the modern woman. Quiet luxury that celebrates your everyday moments.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="hover:opacity-60 transition-opacity"><Instagram size={20} /></Link>
            <Link to="#" className="hover:opacity-60 transition-opacity"><Facebook size={20} /></Link>
            <Link to="#" className="hover:opacity-60 transition-opacity"><Twitter size={20} /></Link>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-6">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-foreground transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-6">Help</h4>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
            <li><Link to="#" className="hover:text-foreground transition-colors">Shipping & Delivery</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Care Guide</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-light">
            <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Sustainability</Link></li>
            <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground italic">
          &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          {/* Mock payment icons */}
          <div className="h-4 w-8 bg-gray-400 rounded-sm"></div>
          <div className="h-4 w-8 bg-gray-400 rounded-sm"></div>
          <div className="h-4 w-8 bg-gray-400 rounded-sm"></div>
          <div className="h-4 w-8 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
