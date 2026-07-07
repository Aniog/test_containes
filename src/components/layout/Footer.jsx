import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] block mb-6">
              VELMORA
            </Link>
            <p className="text-secondary/70 text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for everyday elegance. Designed for the modern woman who treasures quality and quiet luxury.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Shop</h4>
            <ul className="space-y-4 text-sm text-secondary/70">
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Help</h4>
            <ul className="space-y-4 text-sm text-secondary/70">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-background/20 pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-sm text-secondary/70">
              <li><Link to="#" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary/50">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link to="#" className="hover:text-white transition-colors">Pinterest</Link>
            <Link to="#" className="hover:text-white transition-colors">TikTok</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
