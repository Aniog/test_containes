import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-background/70 mb-6 max-w-xs">
              Demi-fine jewelry crafted for the everyday editorial. Elevated essentials to treasure forever.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link to="/collections/all" className="hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/rings" className="hover:text-background transition-colors">Rings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-background transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Journal</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
