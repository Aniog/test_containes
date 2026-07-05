import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '#' },
  { label: 'Sustainability', to: '#' },
  { label: 'Press', to: '#' },
  { label: 'Careers', to: '#' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + tagline */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="font-heading text-xl tracking-[0.25em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Fine jewelry crafted to be treasured. Demi-fine 18K gold plated pieces designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-muted hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-ivory/60 mb-5">We Accept</h4>
            <div className="flex flex-wrap gap-2">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-3 py-1.5 border border-charcoal/60 rounded text-[11px] text-muted/70 tracking-wide"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/50">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted/50 hover:text-muted transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted/50 hover:text-muted transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
