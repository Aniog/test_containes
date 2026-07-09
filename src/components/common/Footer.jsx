import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-widest text-white">
            VELMORA
          </Link>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xs">
            Timeless demi-fine jewelry designed for the modern collection. Crafted with intention to be treasured for a lifetime.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={18} strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Shop Column */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Shop</h4>
          <ul className="space-y-3 text-sm font-light text-muted-foreground">
            <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
            <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
            <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
            <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Help</h4>
          <ul className="space-y-3 text-sm font-light text-muted-foreground">
            <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Materials & Care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6">Company</h4>
          <ul className="space-y-3 text-sm font-light text-muted-foreground">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Stockists</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10 mb-8" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <div>
          © {currentYear} Velmora Fine Jewelry. All Rights Reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
        <div className="flex items-center gap-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-not-allowed">
          {/* Payment Icons Placeholder */}
          <span className="border border-white/20 px-2 py-1">Visa</span>
          <span className="border border-white/20 px-2 py-1">Mastercard</span>
          <span className="border border-white/20 px-2 py-1">Amex</span>
          <span className="border border-white/20 px-2 py-1">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
