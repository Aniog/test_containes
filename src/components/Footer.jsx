import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-velmora-charcoal/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest-extra font-medium">
            VELMORA
          </Link>
          <p className="text-velmora-charcoal/60 text-sm max-w-xs leading-relaxed">
            Demi-fine jewelry crafted for the modern woman. Quiet luxury for everyday treasures.
          </p>
          <div className="flex space-x-4 pt-4">
            <Instagram size={20} className="text-velmora-charcoal/60 hover:text-velmora-gold cursor-pointer transition-colors" />
            <Facebook size={20} className="text-velmora-charcoal/60 hover:text-velmora-gold cursor-pointer transition-colors" />
            <Twitter size={20} className="text-velmora-charcoal/60 hover:text-velmora-gold cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 className="text-xs uppercase tracking-widest-extra font-medium mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            <li><Link to="/shop?category=collections" className="hover:text-velmora-gold transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="text-xs uppercase tracking-widest-extra font-medium mb-6">Help</h4>
          <ul className="space-y-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/shipping" className="hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-velmora-gold transition-colors">FAQ</Link></li>
            <li><Link to="/care" className="hover:text-velmora-gold transition-colors">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-velmora-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-xs uppercase tracking-widest-extra font-medium mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
            <li><Link to="/sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</Link></li>
            <li><Link to="/privacy" className="hover:text-velmora-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-velmora-charcoal/5 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-widest-extra text-velmora-charcoal/40">
        <p>&copy; 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
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
