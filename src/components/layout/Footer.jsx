import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-dark text-velmora-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase block">
              Velmora
            </Link>
            <p className="text-sm text-velmora-light/70 max-w-xs">
              Crafted to be treasured. Fine and demi-fine jewelry designed for the modern romantic.
            </p>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-velmora-light/70">
              <li><Link to="/collections/all" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/rings" className="hover:text-velmora-gold transition-colors">Rings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-velmora-light/70">
              <li><Link to="/faq" className="hover:text-velmora-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-velmora-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-velmora-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-velmora-light/70">
              <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-velmora-light/10 flex flex-col md:flex-row justify-between items-center text-xs text-velmora-light/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-velmora-light transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-velmora-light transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;