import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif tracking-widest mb-6 block">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm font-sans mb-6 max-w-xs">
            Refined demi-fine jewelry designed for the modern woman. Timeless pieces, made to be lived in.
          </p>
          <div className="flex items-center gap-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Shop</h4>
          <ul className="flex flex-col gap-4 text-sm font-sans text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Help</h4>
          <ul className="flex flex-col gap-4 text-sm font-sans text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-primary transition-colors">Care Guide</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm font-sans text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-primary transition-colors">Journal</Link></li>
            <li><Link to="/ethical" className="hover:text-primary transition-colors">Ethical Sourcing</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border/50 text-xs text-muted-foreground gap-4">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Apple Pay</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
