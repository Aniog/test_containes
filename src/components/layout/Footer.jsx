import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-20 pb-10 px-6 md:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Crafting timeless, demi-fine jewelry for the modern woman. 
            Treasured pieces designed to be worn every day.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 className="serif-uppercase text-xs mb-6">Shop</h4>
          <ul className="space-y-4">
            <li><Link to="/shop?category=earrings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="serif-uppercase text-xs mb-6">Help</h4>
          <ul className="space-y-4">
            <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping Info</Link></li>
            <li><Link to="/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Returns & Exchanges</Link></li>
            <li><Link to="/care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Materials & Care</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="serif-uppercase text-xs mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link></li>
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border/30 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">
        <p>&copy; {currentYear} Velmora Fine Jewelry. All Rights Reserved.</p>
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1"><CreditCard className="w-3 h-3" /> <span>Visa</span></span>
          <span className="flex items-center space-x-1"><span>Mastercard</span></span>
          <span className="flex items-center space-x-1"><span>Amex</span></span>
          <span className="flex items-center space-x-1"><span>PayPal</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
