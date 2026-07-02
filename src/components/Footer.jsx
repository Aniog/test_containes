import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest uppercase text-stone-50 mb-6 block">
              Velmora
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Editorial elegance for everyday wear.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-stone-50 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-50 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-stone-50 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-50 text-sm font-medium uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-stone-50 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-stone-50 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-stone-50 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-stone-50 transition-colors">Huggies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 text-sm font-medium uppercase tracking-widest mb-6">Help</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-stone-50 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-stone-50 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-stone-50 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-stone-50 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 text-sm font-medium uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-stone-50 transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-stone-50 transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-stone-50 transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-stone-50 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-stone-50 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
