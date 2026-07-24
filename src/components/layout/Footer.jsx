import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-background/20 pb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link to="/" className="text-2xl font-serif tracking-widest">
            VELMORA
          </Link>
          <p className="text-background/70 text-sm leading-relaxed max-w-sm">
            Crafting demi-fine jewelry that celebrates the delicate balance between modern minimalism and timeless elegance.
          </p>
        </div>

        {/* Shop */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-lg">Shop</h4>
          <nav className="flex flex-col gap-3 text-sm text-background/70">
            <Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link>
            <Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link>
            <Link to="/shop?category=collections" className="hover:text-primary transition-colors">Collections</Link>
          </nav>
        </div>

        {/* Help */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-lg">Help</h4>
          <nav className="flex flex-col gap-3 text-sm text-background/70">
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
            <Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link>
            <Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </nav>
        </div>

        {/* Company */}
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-lg">Company</h4>
          <nav className="flex flex-col gap-3 text-sm text-background/70">
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-background/50 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-background/70 hover:text-primary transition-colors">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-background/70 hover:text-primary transition-colors">
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a href="#" className="text-background/70 hover:text-primary transition-colors">
            <Twitter size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;