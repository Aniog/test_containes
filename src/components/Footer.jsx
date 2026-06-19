import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16 border-b border-white/20 pb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase mb-6 block">
              VELMORA
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Everyday elegance, accessible luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies & Hoops</Link></li>
              <li><Link to="/shop?collection=bestsellers" className="hover:text-primary transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}