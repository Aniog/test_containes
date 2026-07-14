import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-velmora-border pt-16 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-serif uppercase tracking-[0.3em] font-medium mb-6">Velmora</h2>
          <p className="text-sm text-velmora-muted leading-relaxed max-w-xs">
            Timeless jewelry for the modern woman. Discover our curated collection of demi-fine pieces crafted to be treasured.
          </p>
          <div className="flex space-x-4 mt-6">
            <Instagram className="w-5 h-5 text-velmora-muted hover:text-velmora-gold cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-velmora-muted hover:text-velmora-gold cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-velmora-muted hover:text-velmora-gold cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Shop</h3>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=Sets" className="hover:text-velmora-gold transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Help</h3>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="/help" className="hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/help" className="hover:text-velmora-gold transition-colors">Care Guide</Link></li>
            <li><Link to="/help" className="hover:text-velmora-gold transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-velmora-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-6">Velmora</h3>
          <ul className="space-y-4 text-xs tracking-widest uppercase">
            <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
            <li><Link to="/stores" className="hover:text-velmora-gold transition-colors">Store Locator</Link></li>
            <li><Link to="/careers" className="hover:text-velmora-gold transition-colors">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-velmora-border pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-tighter text-velmora-muted">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
