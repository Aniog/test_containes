import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-32 pb-12 border-t border-platinum">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest text-[#1A1A1A]">VELMORA</h2>
            <p className="text-sm text-foreground/60 leading-relaxed font-sans max-w-xs">
              Direct-to-consumer demi-fine jewelry designed for the modern muse. Crafted with care, made to be treasured.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-foreground/40 hover:text-accent transition-colors"><Instagram size={18} /></Link>
              <Link to="#" className="text-foreground/40 hover:text-accent transition-colors"><Facebook size={18} /></Link>
              <Link to="#" className="text-foreground/40 hover:text-accent transition-colors"><Mail size={18} /></Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-sans text-accent">Shop</h3>
            <ul className="space-y-4">
              {['Necklaces', 'Earrings', 'Huggies', 'Sets', 'All Collections'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-foreground/60 hover:text-foreground transition-all hover:tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-sans text-accent">Help</h3>
            <ul className="space-y-4">
              {['Shipping', 'Returns', 'Materials & Care', 'Sustainability', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-foreground/60 hover:text-foreground transition-all">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Summary for Footer) */}
          <div className="space-y-6">
            <h3 className="text-[10px] uppercase tracking-widest font-sans text-accent">Newsletter</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Sign up for early access and editorial stories.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-platinum py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/20"
              />
              <button className="absolute right-0 bottom-2 text-[10px] uppercase tracking-widest font-medium hover:text-accent">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-platinum gap-6">
          <p className="text-[10px] uppercase tracking-widest font-sans text-foreground/40">
            © 2026 VELMORA FINE JEWELRY. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((p) => (
              <span key={p} className="text-[10px] uppercase tracking-widest font-sans text-foreground/20">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
