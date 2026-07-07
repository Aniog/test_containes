import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1 border-r-0 md:border-r border-border md:pr-8">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] font-medium block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Demi-fine jewelry crafted to be treasured. Quiet luxury for your everyday moments.
            </p>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=earrings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif tracking-widest uppercase mb-6 text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border gap-6">
          <p className="text-xs text-muted-foreground h-full flex items-center">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">Pinterest</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
