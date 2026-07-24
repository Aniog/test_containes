import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 pr-4">
              Premium demi-fine jewelry crafted to be treasured. Designed for the modern woman.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Earrings" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
