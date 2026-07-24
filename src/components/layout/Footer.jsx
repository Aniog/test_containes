import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
];

const HELP_LINKS = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Care Instructions', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const COMPANY_LINKS = [
  { label: 'Our Story', href: '/about' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-text-on-dark">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-super-wide uppercase">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-text-on-dark/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in small batches with intention and care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-accent-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-text-on-dark/40 mb-5">Shop</h3>
            <ul className="space-y-3">
              {SHOP_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-accent-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-text-on-dark/40 mb-5">Help</h3>
            <ul className="space-y-3">
              {HELP_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-accent-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-text-on-dark/40 mb-5">Company</h3>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-accent-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-on-dark/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-xs text-text-on-dark/40 hover:text-text-on-dark transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-text-on-dark/40 hover:text-text-on-dark transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
