import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches with intention and care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-taupe hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-gold mb-5">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-taupe hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-taupe hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-taupe hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-taupe hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-taupe hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-gold mb-5">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium tracking-widest uppercase text-gold mb-5">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-taupe hover:text-cream transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warmgray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-warmgray">We accept:</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
                <span key={p} className="px-2 py-1 bg-charcoal rounded text-[10px] text-taupe font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
