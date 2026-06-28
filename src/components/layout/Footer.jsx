import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-sand-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 border-b border-stone-800 pb-8 md:border-0 md:pb-0">
            <Link to="/" className="text-2xl font-serif tracking-widest font-medium block mb-4">
              VELMORA
            </Link>
            <p className="text-stone-400 text-sm mb-6">
              Crafted to be treasured. Fine and demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/collections/all" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Huggies</Link></li>
              <li><Link to="/collections/new" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="text-stone-400 hover:text-sand-50 text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-2 grayscale opacity-50">
            {/* Placeholder payment icons */}
            <div className="w-10 h-6 bg-stone-800 rounded"></div>
            <div className="w-10 h-6 bg-stone-800 rounded"></div>
            <div className="w-10 h-6 bg-stone-800 rounded"></div>
            <div className="w-10 h-6 bg-stone-800 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
