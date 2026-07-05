import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-[0.2em] inline-block mb-6">
            VELMORA
          </Link>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
            Demi-fine jewelry crafted to be treasured. Everyday luxury designed for the modern woman.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Shop</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/collections/best-sellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Help & Care</h4>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-6 tracking-wide">Stay Connected</h4>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-primary-foreground/10 border-b border-primary-foreground/30 px-0 py-2 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
              required
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity">
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}