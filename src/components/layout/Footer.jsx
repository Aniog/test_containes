import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/90 mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-white/60 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/60 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/60 hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/60 hover:text-gold transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/90 mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-white/90 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-white/60 hover:text-gold transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-gold transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">We accept</span>
            <div className="flex items-center gap-3 text-white/30">
              <span className="text-xs font-medium">VISA</span>
              <span className="text-xs font-medium">MC</span>
              <span className="text-xs font-medium">AMEX</span>
              <span className="text-xs font-medium">PayPal</span>
              <span className="text-xs font-medium">Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
