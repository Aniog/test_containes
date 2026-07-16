import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'Care Guide', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '#about' },
    { name: 'Sustainability', path: '#' },
    { name: 'Journal', path: '#journal' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-[1400px] mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl text-cream block mb-6">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-8 text-cream/60">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
              18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-label text-gold mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream/50 hover:text-cream transition-colors"
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
        <div className="w-full h-px bg-cream/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-cream/30 border border-cream/10 px-3 py-1.5 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
