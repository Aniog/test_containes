import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-dark)] text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-[var(--velmora-gold)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--velmora-gold)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[var(--velmora-gold)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment icons */}
          <div className="flex items-center gap-4 text-white/40">
            <CreditCard size={24} />
            <span className="text-xs">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-[var(--velmora-gold)] transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>

          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
