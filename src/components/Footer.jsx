import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SHOP_LINKS = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const HELP_LINKS = ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact'];
const COMPANY_LINKS = ['Our Story', 'Journal', 'Sustainability', 'Careers'];

export function Footer() {
  return (
    <footer className="bg-dark-feature text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.12em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-xs">
              Demi-fine jewelry designed to be treasured. Crafted for everyday luxury and the moments worth remembering.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-label text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {SHOP_LINKS.map((label) => (
                <li key={label}>
                  <Link to="/shop" className="text-sm text-cream/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-label text-white mb-5">Help</h4>
            <ul className="space-y-3">
              {HELP_LINKS.map((label) => (
                <li key={label}>
                  <Link to="/" className="text-sm text-cream/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-label text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((label) => (
                <li key={label}>
                  <Link to="/" className="text-sm text-cream/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/70 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span className="px-2 py-1 border border-white/20 rounded">Visa</span>
            <span className="px-2 py-1 border border-white/20 rounded">MC</span>
            <span className="px-2 py-1 border border-white/20 rounded">Amex</span>
            <span className="px-2 py-1 border border-white/20 rounded">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
