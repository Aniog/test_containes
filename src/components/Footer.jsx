import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest uppercase mb-6">Velmora</h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury that elevates your everyday.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Shop</h3>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/collections/best-sellers" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Help</h3>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6">Company</h3>
            <ul className="space-y-4 text-primary-foreground/70 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}