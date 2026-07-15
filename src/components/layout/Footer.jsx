import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] block mb-6">
              VELMORA
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><Link to="/collections" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Earrings & Huggies</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><Link to="#" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><Link to="#" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/60">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
