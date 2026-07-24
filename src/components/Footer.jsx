import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-semibold">
            VELMORA
          </Link>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
            Refined demi-fine jewelry designed for the modern woman. Elevated essentials crafted to be treasured for a lifetime.
          </p>
          <div className="flex space-x-6 text-foreground/40">
            <Link to="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
            <Link to="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-accent transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Shop</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/collection/Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/collection/Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/collection/Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/collection/Sets" className="hover:text-accent transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Company</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="#" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Materials</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Help</h4>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="#" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">Size Guide</Link></li>
            <li><Link to="#" className="hover:text-accent transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-foreground/40">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6">
          {/* Payment icons placeholders */}
          <div className="w-8 h-5 bg-secondary rounded-sm grayscale opacity-30"></div>
          <div className="w-8 h-5 bg-secondary rounded-sm grayscale opacity-30"></div>
          <div className="w-8 h-5 bg-secondary rounded-sm grayscale opacity-30"></div>
          <div className="w-8 h-5 bg-secondary rounded-sm grayscale opacity-30"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
