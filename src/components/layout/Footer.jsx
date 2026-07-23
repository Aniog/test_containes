import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-widest uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for everyday luxury. Designed to be treasured, worn, and loved.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Shop</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-primary-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop?collection=bestsellers" className="hover:text-primary-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Help</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif uppercase tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary-foreground transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Retailers</Link></li>
              <li><Link to="#" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;