import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', href: '/shop' },
  { label: 'Earrings', href: '/shop?category=earrings' },
  { label: 'Necklaces', href: '/shop?category=necklaces' },
  { label: 'Huggies', href: '/shop?category=huggies' },
  { label: 'Gift Sets', href: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Care Guide', href: '#' },
  { label: 'Size Guide', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'FAQs', href: '#' },
];

const companyLinks = [
  { label: 'Our Story', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Sustainability', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-300/70 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for everyday elegance. Designed in small batches with care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-300/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-cream-300/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-cream-300/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-cream-300/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/50">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-wider uppercase text-cream-300/40">Visa</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-300/40">Mastercard</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-300/40">Amex</span>
            <span className="text-[10px] tracking-wider uppercase text-cream-300/40">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
