import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-heading tracking-[0.2em] font-medium mb-6 block inline-block">
              VELMORA
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Crafting fine jewelry for the modern woman. Designed to be treasured, worn daily, and passed down.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-medium tracking-wide uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/shop?category=earrings" className="hover:text-primary-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=rings" className="hover:text-primary-foreground transition-colors">Rings</Link></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Jewelry</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-medium tracking-wide uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-primary-foreground transition-colors">Jewelry Care</Link></li>
              <li><Link to="/ring-size" className="hover:text-primary-foreground transition-colors">Ring Size Guide</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-medium tracking-wide uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/materials" className="hover:text-primary-foreground transition-colors">Materials</Link></li>
              <li><Link to="/journal" className="hover:text-primary-foreground transition-colors">Journal</Link></li>
              <li><Link to="/careers" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-6">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}