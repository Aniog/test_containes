import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-alt border-t border-gray-200 py-16 mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest uppercase mb-6 block">
              Velmora
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Crafted to be treasured. Demi-fine jewelry for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/collections" className="text-muted text-sm hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections?category=earrings" className="text-muted text-sm hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/collections?category=necklaces" className="text-muted text-sm hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/collections?category=huggies" className="text-muted text-sm hover:text-accent transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-muted text-sm hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-muted text-sm hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-muted text-sm hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-muted text-sm hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-muted text-sm hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-muted text-sm hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-muted text-sm hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">Terms</a>
            <a href="#" className="text-muted hover:text-accent transition-colors text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;