import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-sand pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-serif tracking-[0.2em] uppercase">
              Velmora
            </Link>
            <p className="text-muted text-sm font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Timeless pieces designed to be treasured for a lifetime.
            </p>
            <div className="flex space-x-6">
              <Instagram className="w-5 h-5 text-brand-charcoal hover:text-brand-gold cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-brand-charcoal hover:text-brand-gold cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-brand-charcoal hover:text-brand-gold cursor-pointer transition-colors" />
              <Pinterest className="w-5 h-5 text-brand-charcoal hover:text-brand-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-6 font-bold">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-muted hover:text-brand-charcoal transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-6 font-bold">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/shipping" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Materials & Care</Link></li>
              <li><Link to="/faq" className="text-sm text-muted hover:text-brand-charcoal transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-6 font-bold">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-sm text-muted hover:text-brand-charcoal transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-sand">
          <p className="text-[10px] text-muted uppercase tracking-widest mb-4 md:mb-0">
            © {currentYear} Velmora Fine Jewelry. All Rights Reserved.
          </p>
          <div className="flex space-x-6 grayscale opacity-50">
            {/* Payment Icons Placeholder */}
            <span className="text-[10px] font-bold tracking-tighter italic">VISA</span>
            <span className="text-[10px] font-bold tracking-tighter italic">MASTERCARD</span>
            <span className="text-[10px] font-bold tracking-tighter italic">AMEX</span>
            <span className="text-[10px] font-bold tracking-tighter italic">PAYPAL</span>
            <span className="text-[10px] font-bold tracking-tighter italic">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;