import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl mb-6 tracking-widest">VELMORA</h2>
            <p className="text-primary-foreground/70 max-w-md mb-8">
              Crafted to be treasured. Demi-fine gold jewelry for the modern woman. Elevate your everyday with pieces designed for effortless elegance.
            </p>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Shop</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies & Cuffs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="uppercase tracking-widest text-sm font-medium mb-6">Help</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;