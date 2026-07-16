import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-velmora-stone pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest uppercase text-velmora-charcoal mb-6">
              Velmora
            </h2>
            <p className="text-velmora-charcoal/70 text-sm leading-relaxed mb-6">
              Demi-fine jewelry crafted to be treasured. Quiet luxury for the modern woman.
            </p>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm text-velmora-charcoal mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/collections/bestsellers" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Bestsellers</Link></li>
              <li><Link to="/collections/earrings" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm text-velmora-charcoal mb-6">Help</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm text-velmora-charcoal mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/wholesale" className="text-sm text-velmora-charcoal/70 hover:text-velmora-gold transition-colors">Wholesale</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-velmora-charcoal/10 space-y-4 md:space-y-0">
          <p className="text-xs text-velmora-charcoal/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-velmora-charcoal/60">
            <Link to="/privacy" className="hover:text-velmora-charcoal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-velmora-charcoal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;