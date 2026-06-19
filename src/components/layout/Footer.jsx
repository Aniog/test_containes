import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted pt-20 pb-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-widest font-medium">
              VELMORA
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fine jewelry crafted for the modern woman. Quiet luxury with a warm, editorial touch.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Earrings</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Necklaces</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-foreground transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQS</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-foreground transition-colors">Journal</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
