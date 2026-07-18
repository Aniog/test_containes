import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-stone-50 pt-24 pb-12 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-serif tracking-[0.2em] mb-6 block">
              VELMORA
            </Link>
            <p className="text-stone-500 text-sm max-w-xs mb-8">
              Quiet luxury jewelry for the modern woman. Sustainably crafted and designed to be treasured for a lifetime.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-stone-600 cursor-pointer hover:text-accent font-serif" />
              <Facebook className="w-5 h-5 text-stone-600 cursor-pointer hover:text-accent" />
              <Twitter className="w-5 h-5 text-stone-600 cursor-pointer hover:text-accent" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Shop</h4>
            <Link to="/shop" className="text-stone-500 hover:text-accent text-sm transition-colors">All Jewelry</Link>
            <Link to="/collections" className="text-stone-500 hover:text-accent text-sm transition-colors">New Arrivals</Link>
            <Link to="/best-sellers" className="text-stone-500 hover:text-accent text-sm transition-colors">Best Sellers</Link>
            <Link to="/gifting" className="text-stone-500 hover:text-accent text-sm transition-colors">Gifting</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Help</h4>
            <Link to="/shipping" className="text-stone-500 hover:text-accent text-sm transition-colors">Shipping & Returns</Link>
            <Link to="/care" className="text-stone-500 hover:text-accent text-sm transition-colors">Jewelry Care</Link>
            <Link to="/contact" className="text-stone-500 hover:text-accent text-sm transition-colors">Contact Us</Link>
            <Link to="/faq" className="text-stone-500 hover:text-accent text-sm transition-colors">FAQ</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Company</h4>
            <Link to="/about" className="text-stone-500 hover:text-accent text-sm transition-colors">Our Story</Link>
            <Link to="/stockists" className="text-stone-500 hover:text-accent text-sm transition-colors">Stockists</Link>
            <Link to="/privacy" className="text-stone-500 hover:text-accent text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-stone-500 hover:text-accent text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>

        <Separator className="bg-stone-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-stone-400 text-[10px] uppercase tracking-widest">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
