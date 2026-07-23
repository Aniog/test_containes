import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-base text-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-semibold text-surface">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-surface/70 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for quiet luxury. Designed in small batches, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-surface/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-surface/50 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-surface/80 hover:text-accent transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-surface/80 hover:text-accent transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-surface/80 hover:text-accent transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-surface/80 hover:text-accent transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-surface/50 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Materials & Care</a></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-surface/50 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-surface/80 hover:text-accent transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-surface/80 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline border-surface/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/50">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-widest uppercase text-surface/50">Visa</span>
            <span className="text-[11px] tracking-widest uppercase text-surface/50">Mastercard</span>
            <span className="text-[11px] tracking-widest uppercase text-surface/50">Amex</span>
            <span className="text-[11px] tracking-widest uppercase text-surface/50">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
