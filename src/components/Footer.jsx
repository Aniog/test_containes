import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground pt-16 pb-8 px-6 md:px-12 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-serif tracking-widest text-primary">
            VELMORA
          </Link>
          <p className="text-sm max-w-xs leading-relaxed opacity-80">
            Crafting timeless demi-fine gold jewelry for the modern woman. Elevated essentials and statement pieces designed to be treasured.
          </p>
          <div className="flex space-x-4 pt-4">
            <Instagram size={18} className="hover:text-accent cursor-pointer transition-colors" />
            <Facebook size={18} className="hover:text-accent cursor-pointer transition-colors" />
            <Twitter size={18} className="hover:text-accent cursor-pointer transition-colors" />
            <Pinterest size={18} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop Column */}
        <div className="space-y-4">
          <h4 className="font-serif tracking-wider text-primary">SHOP</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop/earrings" className="hover:text-accent transition-colors">Earrings & Huggies</Link></li>
            <li><Link to="/shop/necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop/rings" className="hover:text-accent transition-colors">Rings</Link></li>
            <li><Link to="/shop/bestsellers" className="hover:text-accent transition-colors">Bestsellers</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="space-y-4">
          <h4 className="font-serif tracking-wider text-primary">HELP</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/size-guide" className="hover:text-accent transition-colors">Size Guide</Link></li>
            <li><Link to="/jewelry-care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">Frequently Asked Questions</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-4">
          <h4 className="font-serif tracking-wider text-primary">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/stockists" className="hover:text-accent transition-colors">Stockists</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <Separator className="my-12 opacity-30" />

      <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between text-[10px] tracking-widest uppercase opacity-60 space-y-4 md:space-y-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-4">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>APPLE PAY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
