import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-base-dark pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] block mb-6">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, timeless design, and exceptional quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-6">Shop</h4>
            <ul className="font-sans text-xs uppercase tracking-widest space-y-4 text-gray-500">
              <li><Link to="/shop" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-6">Help</h4>
            <ul className="font-sans text-xs uppercase tracking-widest space-y-4 text-gray-500">
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="font-sans text-xs uppercase tracking-widest space-y-4 text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/legal" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-base-dark flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
          
          <p className="font-sans text-[10px] text-gray-400 uppercase tracking-widest">
            © 2026 Velmora Fine Jewelry. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 grayscale opacity-50">
            {/* Simple placeholder payment icons */}
            <div className="h-6 w-10 bg-base-dark rounded" />
            <div className="h-6 w-10 bg-base-dark rounded" />
            <div className="h-6 w-10 bg-base-dark rounded" />
            <div className="h-6 w-10 bg-base-dark rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
