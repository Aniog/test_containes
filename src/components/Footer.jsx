import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-cream border-t border-brand-stone/10 pt-16 pb-8 px-6 md:px-12 font-sans text-brand-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-bold">VELMORA</Link>
          <p className="mt-4 text-brand-stone text-sm max-w-xs">
            Demi-fine jewelry crafted for the modern woman. Quiet luxury, timeless designs, and premium materials.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Shop</h4>
          <ul className="space-y-4 text-sm text-brand-stone">
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Earrings</Link></li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Necklaces</Link></li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Help</h4>
          <ul className="space-y-4 text-sm text-brand-stone">
            <li><Link to="#" className="hover:text-brand-charcoal transition-colors">Shipping & Returns</Link></li>
            <li><Link to="#" className="hover:text-brand-charcoal transition-colors">Care Guide</Link></li>
            <li><Link to="#" className="hover:text-brand-charcoal transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-brand-charcoal transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 uppercase tracking-widest">Connect</h4>
          <div className="flex gap-4 mb-6">
            <Link to="#" className="text-brand-stone hover:text-brand-charcoal transition-colors"><Instagram size={20} /></Link>
            <Link to="#" className="text-brand-stone hover:text-brand-charcoal transition-colors"><Facebook size={20} /></Link>
            <Link to="#" className="text-brand-stone hover:text-brand-charcoal transition-colors"><Twitter size={20} /></Link>
          </div>
          <p className="text-xs text-brand-stone">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-stone/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 opacity-50">
          <span className="text-[8px] uppercase font-bold text-brand-stone tracking-widest">Visa</span>
          <span className="text-[8px] uppercase font-bold text-brand-stone tracking-widest">Mastercard</span>
          <span className="text-[8px] uppercase font-bold text-brand-stone tracking-widest">Amex</span>
          <span className="text-[8px] uppercase font-bold text-brand-stone tracking-widest">Paypal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
