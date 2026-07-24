import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Logo & Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest mb-6 block">VELMORA</Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-8">
              Premium demi-fine jewelry crafted for the modern woman. Designed to be treasured, worn every day, and passed down.
            </p>
            <div className="flex gap-6">
              <Instagram size={20} className="text-muted hover:text-foreground cursor-pointer transition-colors" />
              <Facebook size={20} className="text-muted hover:text-foreground cursor-pointer transition-colors" />
              <Twitter size={20} className="text-muted hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-premium mb-8 text-foreground">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-muted hover:text-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-muted hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-muted hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-muted hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm text-muted hover:text-foreground transition-colors">Gifts & Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-premium mb-8 text-foreground">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm text-muted hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-muted hover:text-foreground transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="text-sm text-muted hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-premium mb-8 text-foreground">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-muted hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-muted hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/wholesale" className="text-sm text-muted hover:text-foreground transition-colors">Wholesale</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} VELMORA Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-muted">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest text-muted">Terms of Service</span>
          </div>
          <div className="flex gap-4 grayscale opacity-50">
            {/* Payment Icons Placeholder */}
            <div className="w-8 h-5 border border-zinc-200 rounded flex items-center justify-center text-[6px]">VISA</div>
            <div className="w-8 h-5 border border-zinc-200 rounded flex items-center justify-center text-[6px]">MC</div>
            <div className="w-8 h-5 border border-zinc-200 rounded flex items-center justify-center text-[6px]">AMEX</div>
            <div className="w-8 h-5 border border-zinc-200 rounded flex items-center justify-center text-[6px]">APPLE</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
