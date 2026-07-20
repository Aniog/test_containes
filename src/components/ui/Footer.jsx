import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-cream pt-20 pb-10 px-6 md:px-20 border-t border-velmora-taupe/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-serif tracking-widest">VELMORA</h2>
          <p className="text-sm text-velmora-charcoal/60 leading-relaxed max-w-xs">
            Timeless jewelry for the modern woman. 18K Gold plated, hypoallergenic, and designed to be treasured for a lifetime.
          </p>
          <div className="flex items-center gap-4 text-velmora-charcoal/80">
            <Instagram size={18} className="cursor-pointer hover:text-velmora-gold transition-colors" />
            <Facebook size={18} className="cursor-pointer hover:text-velmora-gold transition-colors" />
            <Twitter size={18} className="cursor-pointer hover:text-velmora-gold transition-colors" />
            <Mail size={18} className="cursor-pointer hover:text-velmora-gold transition-colors" />
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h3>
          <ul className="flex flex-col gap-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-velmora-gold transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h3>
          <ul className="flex flex-col gap-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/shipping" className="hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/faq" className="hover:text-velmora-gold transition-colors">FAQ</Link></li>
            <li><Link to="/materials" className="hover:text-velmora-gold transition-colors">Materials & Care</Link></li>
            <li><Link to="/contact" className="hover:text-velmora-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h3>
          <ul className="flex flex-col gap-4 text-sm text-velmora-charcoal/60">
            <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">The Journal</Link></li>
            <li><Link to="/stockists" className="hover:text-velmora-gold transition-colors">Stockists</Link></li>
            <li><Link to="/privacy" className="hover:text-velmora-gold transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-velmora-taupe/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40">
          © {currentYear} Velmora Fine Jewelry. All Rights Reserved.
        </p>
        <div className="flex gap-4 opacity-30 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Inc._logo.svg" alt="Amex" className="h-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
