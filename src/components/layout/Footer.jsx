import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-widest uppercase">
                Velmora
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-sm mb-6">
              Demi-fine gold jewelry crafted to be treasured. Everyday luxury for the modern woman.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/products" className="hover:text-primary-foreground transition-colors">All Jewelry</Link></li>
              <li><Link to="/products?category=earrings" className="hover:text-primary-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/products?category=necklaces" className="hover:text-primary-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/products?category=huggies" className="hover:text-primary-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/collections/bestsellers" className="hover:text-primary-foreground transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-wider">Help</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-primary-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary-foreground transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}