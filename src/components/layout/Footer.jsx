import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-zinc-900 pt-20 pb-10 px-6 md:px-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-sm text-zinc-600 max-w-xs">
            Demi-fine jewelry crafted for the modern woman. Timeless elegance, accessible luxury.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="hover:text-primary transition-soft cursor-pointer" />
            <Facebook size={20} className="hover:text-primary transition-soft cursor-pointer" />
            <Twitter size={20} className="hover:text-primary transition-soft cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="uppercase-spaced mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-zinc-600">
            <li><Link to="/shop" className="hover:text-primary transition-soft">All Jewelry</Link></li>
            <li><Link to="/shop/earrings" className="hover:text-primary transition-soft">Earrings</Link></li>
            <li><Link to="/shop/necklaces" className="hover:text-primary transition-soft">Necklaces</Link></li>
            <li><Link to="/shop/collections" className="hover:text-primary transition-soft">Collections</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="uppercase-spaced mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-zinc-600">
            <li><Link to="/shipping" className="hover:text-primary transition-soft">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-primary transition-soft">Materials & Care</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-soft">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-soft">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="uppercase-spaced mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-600">
            <li><Link to="/about" className="hover:text-primary transition-soft">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-primary transition-soft">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-primary transition-soft">Sustainability</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-soft">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-zinc-500">
          © {currentYear} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex gap-4 opacity-50 grayscale">
          {/* Mock payment icons */}
          <div className="h-6 w-10 bg-zinc-300 rounded" />
          <div className="h-6 w-10 bg-zinc-300 rounded" />
          <div className="h-6 w-10 bg-zinc-300 rounded" />
          <div className="h-6 w-10 bg-zinc-300 rounded" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
