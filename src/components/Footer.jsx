import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '#' },
    { name: 'Sustainability', path: '#' },
    { name: 'Journal', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-surface-primary border-t border-white/[0.06]">
      <div className="section-padding py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="font-serif text-xl tracking-[0.2em] text-text-primary mb-4">VELMORA</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
                Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, designed to be treasured.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-text-muted hover:text-brand-gold transition-colors duration-300" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-text-muted hover:text-brand-gold transition-colors duration-300" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-text-muted hover:text-brand-gold transition-colors duration-300" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-sans text-overline uppercase text-text-muted mb-5">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-text-secondary text-sm hover:text-brand-gold transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-xs">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map(icon => (
                <span
                  key={icon}
                  className="text-text-muted/60 text-[10px] font-sans uppercase tracking-wider border border-white/[0.08] rounded px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
