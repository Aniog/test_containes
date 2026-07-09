import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E5E5]/50 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif tracking-luxury">VELMORA</Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crafting premium demi-fine jewelry for the modern woman. Designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex space-x-6 text-[#1A1A1A]">
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
              <Facebook className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
              <Twitter className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] mb-8 text-[#9D8C70]">Shop</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/shop" className="hover:text-[#1A1A1A] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#1A1A1A] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#1A1A1A] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#1A1A1A] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-[#1A1A1A] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
             <h4 className="text-xs font-sans uppercase tracking-[0.2em] mb-8 text-[#9D8C70]">Help</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-[#1A1A1A] transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-[#1A1A1A] transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/care" className="hover:text-[#1A1A1A] transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-[#1A1A1A] transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#1A1A1A] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] mb-8 text-[#9D8C70]">Company</h4>
            <ul className="space-y-4 text-sm font-sans text-muted-foreground">
              <li><Link to="/about" className="hover:text-[#1A1A1A] transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#1A1A1A] transition-colors">Sustainability</Link></li>
              <li><Link to="/stockists" className="hover:text-[#1A1A1A] transition-colors">Stockists</Link></li>
              <li><Link to="/careers" className="hover:text-[#1A1A1A] transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[#E5E5E5]/30 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 Velmora Fine Jewelry. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 grayscale opacity-50" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 grayscale opacity-50" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
