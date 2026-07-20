import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-serif tracking-widest uppercase mb-6">Velmora</h3>
            <p className="text-sm text-secondary/80 leading-relaxed mb-6 max-w-sm">
              Demi-fine jewelry crafted for the modern individual. Designed to be treasured, worn daily, and loved forever.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-primary">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-primary">Help</h4>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-sm text-secondary/80">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <a href="#" className="text-secondary/60 hover:text-primary transition-colors text-sm">Instagram</a>
            <a href="#" className="text-secondary/60 hover:text-primary transition-colors text-sm">TikTok</a>
            <a href="#" className="text-secondary/60 hover:text-primary transition-colors text-sm">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
