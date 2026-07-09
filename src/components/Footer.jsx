import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif tracking-[0.2em]">VELMORA</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
            Elegantly designed jewelry for the modern woman. Crafted with intention, to be treasured forever.
          </p>
          <div className="flex space-x-6 text-muted-foreground">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-black transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop?cat=Earrings" className="hover:text-black transition-colors">Earrings</Link></li>
            <li><Link to="/shop?cat=Necklaces" className="hover:text-black transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?cat=Huggies" className="hover:text-black transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-black transition-colors">all Jewelry</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-black transition-colors">The Journal</Link></li>
            <li><Link to="/impact" className="hover:text-black transition-colors">Sustainability</Link></li>
            <li><Link to="/press" className="hover:text-black transition-colors">Press</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Support</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            <li><Link to="/care" className="hover:text-black transition-colors">Materials & Care</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground space-y-4 md:space-y-0">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
};
