import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-[0.2em] text-primary-foreground uppercase">Velmora</span>
            </Link>
            <p className="text-secondary/70 text-sm max-w-xs mb-8">
              Crafted to be treasured. Fine and demi-fine jewelry designed for the modern heirloom.
            </p>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-secondary/70 hover:text-white transition-colors text-sm">All Jewelry</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-secondary/70 hover:text-white transition-colors text-sm">Necklaces</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-secondary/70 hover:text-white transition-colors text-sm">Earrings</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-secondary/70 hover:text-white transition-colors text-sm">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-secondary/70 hover:text-white transition-colors text-sm">Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-6">Help</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Jewelry Care</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Track Order</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-secondary/70 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Retail Stores</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-secondary/50 text-xs">Instagram</span>
            <span className="text-secondary/50 text-xs">Pinterest</span>
            <span className="text-secondary/50 text-xs">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;