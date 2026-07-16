import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="md:col-span-1 border-b border-primary-foreground/10 pb-12 md:border-none md:pb-0">
          <Link to="/" className="font-serif text-2xl tracking-widest uppercase block mb-6">
            Velmora
          </Link>
          <p className="text-sm opacity-80 leading-relaxed max-w-sm">
            Crafted for the modern woman. Demi-fine jewelry to be treasured every day.
          </p>
        </div>

        {/* Shop */}
        <div className="col-span-1">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h3>
          <ul className="space-y-4 text-sm opacity-80 flex flex-col">
            <li><Link to="/collections">All Jewelry</Link></li>
            <li><Link to="/collections?category=earrings">Earrings</Link></li>
            <li><Link to="/collections?category=necklaces">Necklaces</Link></li>
            <li><Link to="/collections?category=huggies">Huggies</Link></li>
            <li><Link to="/collections?category=sets">Gift Sets</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="col-span-1">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h3>
          <ul className="space-y-4 text-sm opacity-80 flex flex-col">
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/care">Jewelry Care</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="col-span-1">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6">Company</h3>
          <ul className="space-y-4 text-sm opacity-80 flex flex-col">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/terms">Terms & Privacy</Link></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 md:mt-24 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs opacity-60">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>TikTok</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;