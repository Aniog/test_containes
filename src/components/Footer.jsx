import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-[#FDFCFB] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-bold">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Timeless demi-fine jewelry crafted for the modern woman. Quiet luxury, crafted to be treasured.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-lg mb-6">Shop</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
            <li><Link to="/shop" className="hover:text-accent transition-colors">All Collections</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-serif text-lg mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-serif text-lg mb-6">Help</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
            <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-widest uppercase text-muted-foreground font-medium">
        <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
