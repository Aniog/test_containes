import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
  { label: 'Track Order', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Sustainability', to: '#' },
  { label: 'Journal', to: '#' },
  { label: 'Press', to: '#' },
  { label: 'Careers', to: '#' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="font-serif text-xl tracking-ultra-wide uppercase text-white block mb-4">
              Velmora
            </Link>
            <p className="text-body text-white/50 max-w-xs leading-relaxed mb-6">
              Demi-fine 18K gold jewelry crafted for the modern woman. Designed to last, priced to collect.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-overline uppercase tracking-ultra-wide text-gold mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-body text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-overline uppercase tracking-ultra-wide text-gold mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-body text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-overline uppercase tracking-ultra-wide text-gold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-body text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & trust */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-sans text-overline uppercase tracking-ultra-wide text-gold mb-4">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {paymentIcons.map(icon => (
                <div
                  key={icon}
                  className="px-3 py-1.5 border border-white/10 text-caption text-white/40"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-caption text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-caption text-white/30 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-caption text-white/30 hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
