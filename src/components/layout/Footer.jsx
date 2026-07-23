import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern woman. Elevated essentials, crafted to be treasured.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-velmora-gold transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-charcoal transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-charcoal transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-charcoal transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-charcoal transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-charcoal transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-charcoal transition-colors">Jewelry Care</Link></li>
            <li><Link to="/faq" className="hover:text-charcoal transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-charcoal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-charcoal transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-charcoal transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-charcoal transition-colors">Sustainability</Link></li>
            <li><Link to="/terms" className="hover:text-charcoal transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.
        </p>
          <div className="text-[10px] tracking-widest text-muted-foreground uppercase flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Paypal</span>
            <span>Apple Pay</span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
