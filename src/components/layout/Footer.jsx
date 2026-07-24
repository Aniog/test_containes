import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Journal', href: '#' },
  ],
};

const PaymentIcon = ({ label }) => (
  <span className="inline-flex items-center justify-center px-2 py-1 border border-cream/20 rounded text-[9px] font-sans font-500 text-cream/50 tracking-wider uppercase">
    {label}
  </span>
);

const Footer = () => (
  <footer className="bg-espresso text-cream/70">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="font-serif text-2xl tracking-[0.18em] uppercase text-cream block mb-4">
            Velmora
          </Link>
          <p className="font-sans text-sm leading-relaxed text-cream/50 max-w-xs mb-6">
            Demi-fine gold jewelry crafted for the everyday and the extraordinary. Designed to be worn, treasured, and passed on.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-cream/40 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/40 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Youtube" className="text-cream/40 hover:text-gold transition-colors">
              <Youtube size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream/40 mb-4">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <p className="font-sans text-xs text-cream/30 tracking-wide">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <PaymentIcon label="Visa" />
          <PaymentIcon label="MC" />
          <PaymentIcon label="Amex" />
          <PaymentIcon label="PayPal" />
          <PaymentIcon label="Apple Pay" />
          <PaymentIcon label="Shop Pay" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
