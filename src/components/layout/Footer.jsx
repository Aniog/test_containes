import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', path: '/shop' },
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Sets', path: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', path: '#' },
  { label: 'Size Guide', path: '#' },
  { label: 'FAQ', path: '#' },
  { label: 'Contact Us', path: '#' },
  { label: 'Track Order', path: '#' },
];

const companyLinks = [
  { label: 'Our Story', path: '/#about' },
  { label: 'Sustainability', path: '#' },
  { label: 'Press', path: '#' },
  { label: 'Careers', path: '#' },
  { label: 'Journal', path: '/#journal' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300">
      {/* Main footer */}
      <div className="container-page section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-light tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              elegant, accessible, and made to last.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-gold hover:text-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-gold-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-medium mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-gold-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-sans font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-gold-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((card) => (
                <div
                  key={card}
                  className="px-2 py-1 bg-stone-800 rounded text-xs text-stone-400"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
