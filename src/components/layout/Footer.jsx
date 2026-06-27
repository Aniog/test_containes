import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-sand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.25em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-stone-light leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-velmora" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-velmora" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velmora-stone-light hover:text-velmora-gold transition-velmora" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">FAQs</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Our Story</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Journal</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-velmora-stone-light hover:text-velmora-gold transition-velmora">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <hr className="hr-hairline my-10 opacity-30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-velmora-stone-light">
          <p>&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="tracking-[0.08em] uppercase text-[10px]">Visa</span>
            <span className="tracking-[0.08em] uppercase text-[10px]">Mastercard</span>
            <span className="tracking-[0.08em] uppercase text-[10px]">Amex</span>
            <span className="tracking-[0.08em] uppercase text-[10px]">PayPal</span>
            <span className="tracking-[0.08em] uppercase text-[10px]">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}