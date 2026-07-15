import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-serif tracking-[0.2em]">VELMORA</h2>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Direct-to-consumer demi-fine jewelry. Crafted with intention, designed to be treasured for a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Col */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Shop</h3>
            <ul className="flex flex-col gap-4 text-sm text-stone-500">
              <li><Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-accent transition-colors">Gifts & Sets</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-stone-500">
              <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/stockists" className="hover:text-accent transition-colors">Stockists</Link></li>
            </ul>
          </div>

          {/* Help Col */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Help</h3>
            <ul className="flex flex-col gap-4 text-sm text-stone-500">
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Capture Section (Alternative placement) */}
        <div className="border-t border-stone-200 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-sm text-center md:text-left">
            <h3 className="font-serif text-xl mb-2">Join the Inner Circle</h3>
            <p className="text-sm text-stone-500">Sign up for 10% off your first order and exclusive access to new launches.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="rounded-none border-stone-300 focus-visible:ring-accent"
            />
            <Button className="rounded-none bg-stone-900 hover:bg-stone-800 tracking-widest px-8">JOIN</Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-stone-400">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-stone-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-600">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-4 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            {/* Simple labels for payment icons */}
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
