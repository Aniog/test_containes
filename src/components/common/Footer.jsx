import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/10 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-light">
            VELMORA
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Crafted for the modern woman who values quiet luxury and timeless elegance. Demi-fine jewelry meant to be treasured.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Shop</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/shop?category=earrings" className="hover:text-primary transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-primary transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-primary transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=sets" className="hover:text-primary transition-colors">Gift Sets</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Help</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-primary transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/stockists" className="hover:text-primary transition-colors">Stockists</Link></li>
            <li><Link to="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6">
          <div className="w-8 h-5 bg-muted rounded-sm" />
          <div className="w-8 h-5 bg-muted rounded-sm" />
          <div className="w-8 h-5 bg-muted rounded-sm" />
          <div className="w-8 h-5 bg-muted rounded-sm" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
