import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-xl tracking-widest uppercase mb-6">Velmora</h3>
            <p className="text-secondary text-sm max-w-xs">
              Crafted to be treasured. Demi-fine jewelry for the modern romantic.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><NavLink to="/shop?category=earrings" className="text-secondary hover:text-primary transition-colors text-sm">Earrings</NavLink></li>
              <li><NavLink to="/shop?category=necklaces" className="text-secondary hover:text-primary transition-colors text-sm">Necklaces</NavLink></li>
              <li><NavLink to="/shop?category=huggies" className="text-secondary hover:text-primary transition-colors text-sm">Huggies</NavLink></li>
              <li><NavLink to="/shop" className="text-secondary hover:text-primary transition-colors text-sm">All Jewelry</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-6">Help</h4>
            <ul className="space-y-4">
              <li><NavLink to="/contact" className="text-secondary hover:text-primary transition-colors text-sm">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="text-secondary hover:text-primary transition-colors text-sm">FAQ</NavLink></li>
              <li><NavLink to="/shipping" className="text-secondary hover:text-primary transition-colors text-sm">Shipping & Returns</NavLink></li>
              <li><NavLink to="/care" className="text-secondary hover:text-primary transition-colors text-sm">Jewelry Care</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><NavLink to="/about" className="text-secondary hover:text-primary transition-colors text-sm">Our Story</NavLink></li>
              <li><NavLink to="/journal" className="text-secondary hover:text-primary transition-colors text-sm">Journal</NavLink></li>
              <li><NavLink to="/sustainability" className="text-secondary hover:text-primary transition-colors text-sm">Sustainability</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
            <a href="#" className="hover:text-primary transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;