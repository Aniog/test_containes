import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-base border-t border-velmora-surface pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-semibold">VELMORA</Link>
          <p className="text-velmora-muted text-sm leading-relaxed max-w-xs">
            Timeless jewelry for the modern woman. Each piece is crafted with intention to be treasured for generations.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-velmora-surface rounded-full hover:bg-velmora-accent hover:text-white transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-velmora-surface rounded-full hover:bg-velmora-accent hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 border border-velmora-surface rounded-full hover:bg-velmora-accent hover:text-white transition-all duration-300">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold">Shop</h4>
          <ul className="space-y-3 text-sm text-velmora-muted font-medium">
            <li><Link to="/shop" className="hover:text-velmora-accent transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-accent transition-colors">Earrings</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-accent transition-colors">Necklaces</Link></li>
            <li><Link to="/shop" className="hover:text-velmora-accent transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold">Support</h4>
          <ul className="space-y-3 text-sm text-velmora-muted font-medium">
            <li><a href="#" className="hover:text-velmora-accent transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-velmora-accent transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-velmora-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-velmora-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-6">
          <h4 className="uppercase tracking-widest text-xs font-bold">Company</h4>
          <ul className="space-y-3 text-sm text-velmora-muted font-medium">
             <li><Link to="/about" className="hover:text-velmora-accent transition-colors">Our Story</Link></li>
             <li><Link to="/journal" className="hover:text-velmora-accent transition-colors">Journal</Link></li>
             <li><a href="#" className="hover:text-velmora-accent transition-colors">Sustainability</a></li>
             <li><a href="#" className="hover:text-velmora-accent transition-colors">Wholesale</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-velmora-surface flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-velmora-muted uppercase tracking-widest">
          © 2026 VELMORA FINE JEWELRY. All Rights Reserved.
        </p>
        <div className="flex gap-6 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" className="h-3" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" className="h-5" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-4" alt="Amex" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
