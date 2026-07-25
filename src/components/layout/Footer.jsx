import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-warm border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-brand-text">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-brand-subtle hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-subtle hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-subtle hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-brand-text font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-muted hover:text-brand-gold transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-subtle">© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-subtle">Visa</span>
            <span className="text-xs text-brand-subtle">Mastercard</span>
            <span className="text-xs text-brand-subtle">Amex</span>
            <span className="text-xs text-brand-subtle">PayPal</span>
            <span className="text-xs text-brand-subtle">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
