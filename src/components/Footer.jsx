import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary border-t border-border mt-auto pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h3>
          <p className="text-secondary/70 text-sm leading-relaxed max-w-sm">
            Demi-fine jewelry crafted to be treasured. Made with premium materials for everyday elegance.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li><Link to="/shop" className="hover:text-secondary transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?cat=Earrings" className="hover:text-secondary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?cat=Necklaces" className="hover:text-secondary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?cat=Huggies" className="hover:text-secondary transition-colors">Huggies</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li><Link to="#" className="hover:text-secondary transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Jewelry Care</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-sm tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-secondary/70">
            <li><Link to="#" className="hover:text-secondary transition-colors">Our Story</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Sustainability</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Careers</Link></li>
            <li><Link to="#" className="hover:text-secondary transition-colors">Press</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-secondary/20 text-xs text-secondary/50">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4 border border-secondary/20 rounded p-1 mt-4 md:mt-0">
          <span className="px-2">Visa</span>
          <span className="px-2 border-l border-secondary/20">MC</span>
          <span className="px-2 border-l border-secondary/20">Amex</span>
          <span className="px-2 border-l border-secondary/20">Apple</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;