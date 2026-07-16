import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] pt-20 pb-10 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif tracking-widest mb-6">VELMORA</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Crafted with intention, designed for daily treasure. Premium demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4">
              <Instagram size={18} className="text-accent cursor-pointer" />
              <Facebook size={18} className="text-accent cursor-pointer" />
              <Twitter size={18} className="text-accent cursor-pointer" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Shop</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground">All Jewelry</Link></li>
              <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-foreground">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-foreground">Necklaces</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Help</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/care" className="hover:text-foreground">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-foreground">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-foreground">Journal</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline-divider mb-8" />

        <div className="flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {/* Payment icons placeholders */}
            <div className="w-10 h-6 bg-muted border rounded" />
            <div className="w-10 h-6 bg-muted border rounded" />
            <div className="w-10 h-6 bg-muted border rounded" />
            <div className="w-10 h-6 bg-muted border rounded" />
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
