import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase font-medium">
            Velmora
          </Link>
          <p className="text-sm text-gray-400 max-w-sm">
            Crafted to be treasured. Demi-fine jewelry designed for the modern editorial aesthetic.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-primary transition-colors">All Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Visa</span>
          <span>Apple Pay</span>
          <span>Mastercard</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;