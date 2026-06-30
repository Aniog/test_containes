import React from 'react';
import { Link } from 'react-router-dom';

const SHOP_LINKS = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
];

const HELP_LINKS = [
  { label: 'Shipping & Returns', to: '/help' },
  { label: 'Size Guide', to: '/help' },
  { label: 'Care Guide', to: '/help' },
  { label: 'FAQ', to: '/help' },
  { label: 'Contact Us', to: '/help' },
];

const COMPANY_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '/about' },
  { label: 'Stockists', to: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.15em] font-medium text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed max-w-[240px]">
              Demi-fine jewelry crafted with intention. 18K gold-plated pieces designed for everyday elegance.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-taupe mb-4">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-taupe mb-4">Help</h4>
            <ul className="flex flex-col gap-2.5">
              {HELP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-taupe mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-divider my-10 md:my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-velmora-muted">Instagram</span>
            <span className="text-xs text-velmora-muted">Pinterest</span>
            <span className="text-xs text-velmora-muted">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
