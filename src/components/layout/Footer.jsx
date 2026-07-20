import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase mb-6 inline-block">
              Velmora
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-xs text-balance">
              Crafted to be treasured. Demi-fine jewelry for everyday elegance.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><Link to="/collection" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif tracking-widest uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li><Link to="/" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex space-x-4 text-secondary-foreground/60">
            <a href="#" className="hover:text-primary transition-colors hover:bg-transparent">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors hover:bg-transparent">Pinterest</a>
            <a href="#" className="hover:text-primary transition-colors hover:bg-transparent">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}