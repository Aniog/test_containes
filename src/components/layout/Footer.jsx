import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-12 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Demi-fine jewelry crafted for the modern woman. Quiet luxury, designed to be treasured for a lifetime.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Facebook size={20} className="hover:text-primary cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs uppercase tracking-widestest font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop?category=earrings" className="hover:text-foreground transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-foreground transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-foreground transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-widestest font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-foreground transition-colors">Sustainability</Link></li>
            <li><Link to="/stockists" className="hover:text-foreground transition-colors">Stockists</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-xs uppercase tracking-widestest font-bold mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-foreground transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/50 flex flex-col md:row items-center justify-between space-y-6 md:space-y-0 text-[10px] uppercase tracking-widestest text-muted-foreground">
        <div>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</div>
        <div className="flex space-x-6">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>APPLE PAY</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
