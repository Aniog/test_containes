import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Track Order', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Stockists', 'Careers', 'Press'],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Klarna'];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-brand-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
              Premium demi-fine jewelry crafted for those who appreciate quiet luxury and lasting beauty.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs tracking-[0.15em] uppercase font-sans font-semibold text-brand-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-brand-muted hover:text-brand-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-charcoal/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-brand-muted bg-brand-charcoal/30 px-2 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}