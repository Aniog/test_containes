import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Track Order', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Story', href: '/#about' },
      { name: 'Journal', href: '/#journal' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-200">
      {/* Newsletter strip — only on certain pages, rendered separately */}
      <div className="max-w-[1440px] mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-cream-100">
              VELMORA
            </Link>
            <p className="mt-4 text-body-sm text-cream-400 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — 
              accessible luxury that lasts.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-cream-500/30 flex items-center justify-center 
                           text-cream-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-caption uppercase tracking-[0.15em] text-cream-100 mb-5 font-sans font-medium">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-body-sm text-cream-400 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-cream-500">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-body-sm text-cream-500">Privacy Policy</span>
              <span className="text-body-sm text-cream-500">Terms of Service</span>
            </div>
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <div
                  key={method}
                  className="px-2 py-1 border border-cream-500/20 rounded text-caption text-cream-400 font-sans"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
