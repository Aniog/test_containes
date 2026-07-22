import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-20 pb-10 px-6 md:px-12 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-medium">
            VELMORA
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Demi-fine jewelry crafted for the modern woman. Quiet luxury, timeless designs, and accessible elegance.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-accent" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-accent" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-accent" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-ultra-wide font-medium mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Jewelry</Link></li>
            <li><Link to="/collections/earrings" className="hover:text-foreground">Earrings</Link></li>
            <li><Link to="/collections/necklaces" className="hover:text-foreground">Necklaces</Link></li>
            <li><Link to="/collections/huggies" className="hover:text-foreground">Huggies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-ultra-wide font-medium mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-foreground">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-foreground">Returns</Link></li>
            <li><Link to="/care" className="hover:text-foreground">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-ultra-wide font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-foreground">Journal</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border space-y-4 md:space-y-0 text-[10px] text-muted-foreground uppercase tracking-widest">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Shop Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
