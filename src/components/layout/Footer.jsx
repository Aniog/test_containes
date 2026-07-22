import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super-wide text-white">
              VELMORA
            </Link>
            <p className="text-sm text-velvet-400 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated pieces designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velvet-400 hover:text-warm-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-warm-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-warm-500 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Shop</h4>
            <div className="flex flex-col gap-3 text-sm text-velvet-400">
              <Link to="/shop" className="hover:text-warm-500 transition-colors">All Jewelry</Link>
              <Link to="/shop/earrings" className="hover:text-warm-500 transition-colors">Earrings</Link>
              <Link to="/shop/necklaces" className="hover:text-warm-500 transition-colors">Necklaces</Link>
              <Link to="/shop/huggies" className="hover:text-warm-500 transition-colors">Huggies</Link>
              <Link to="/shop/sets" className="hover:text-warm-500 transition-colors">Gift Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Help</h4>
            <div className="flex flex-col gap-3 text-sm text-velvet-400">
              <Link to="/shipping" className="hover:text-warm-500 transition-colors">Shipping & Delivery</Link>
              <Link to="/returns" className="hover:text-warm-500 transition-colors">Returns & Exchanges</Link>
              <Link to="/faq" className="hover:text-warm-500 transition-colors">FAQ</Link>
              <Link to="/contact" className="hover:text-warm-500 transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-velvet-400">
              <Link to="/about" className="hover:text-warm-500 transition-colors">Our Story</Link>
              <Link to="/sustainability" className="hover:text-warm-500 transition-colors">Sustainability</Link>
              <Link to="/journal" className="hover:text-warm-500 transition-colors">Journal</Link>
              <Link to="/careers" className="hover:text-warm-500 transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        <hr className="hairline border-velvet-800 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-velvet-500">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
