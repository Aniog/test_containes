import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-onyx text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted-light leading-relaxed font-sans">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted-light hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Care Guide</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">FAQ</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Contact Us</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Our Story</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Journal</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-brand-muted-light font-sans cursor-pointer hover:text-brand-gold transition-colors">Press</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-sans text-brand-muted-light">VISA</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-sans text-brand-muted-light">MC</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-sans text-brand-muted-light">AMEX</div>
            <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-sans text-brand-muted-light">PAYPAL</div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
