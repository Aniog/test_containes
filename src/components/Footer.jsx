import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay', 'Klarna'];

export default function Footer() {
  return (
    <footer className="bg-velvet-deep border-t border-velvet-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo + Social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-extrawide text-velvet-cream hover:text-velvet-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-3 text-velvet-muted text-xs leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-velvet-muted hover:text-velvet-gold transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[11px] tracking-widest uppercase text-velvet-cream mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-velvet-taupe hover:text-velvet-cream text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-velvet-muted text-[10px] uppercase tracking-wider border border-velvet-border px-2 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-velvet-muted text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}