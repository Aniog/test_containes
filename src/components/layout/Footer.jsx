import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="heading-serif text-3xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[var(--color-velmora-400)] leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold-400)]">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold-400)]">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-[var(--color-gold-400)]">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-[var(--color-velmora-300)] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline bg-[var(--color-velmora-800)] my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--color-velmora-400)] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--color-velmora-400)] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--color-velmora-400)] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-[var(--color-velmora-500)]">
            <CreditCard className="w-8 h-5" />
            <span className="text-xs">Visa</span>
            <span className="text-xs">Mastercard</span>
            <span className="text-xs">Amex</span>
            <span className="text-xs">PayPal</span>
          </div>

          <p className="text-xs text-[var(--color-velmora-600)]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
