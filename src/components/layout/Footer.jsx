import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 lg:px-8 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-[0.15em] uppercase block">
            Velmora
          </Link>
          <p className="text-muted/70 text-sm max-w-xs leading-relaxed">
            Demi-fine jewelry crafted to be treasured. Quiet luxury for your everyday moments.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest uppercase font-serif">Shop</h4>
          <ul className="space-y-3 text-sm text-muted/70">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest uppercase font-serif">Help</h4>
          <ul className="space-y-3 text-sm text-muted/70">
            <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Care Guide</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="text-sm tracking-widest uppercase font-serif">Company</h4>
          <ul className="space-y-3 text-sm text-muted/70">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/50">
        <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}