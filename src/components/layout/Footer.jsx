import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
    ],
  };

  const paymentIcons = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-red-500' },
    { name: 'Amex', color: 'bg-blue-800' },
    { name: 'PayPal', color: 'bg-blue-400' },
  ];

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Designed for the modern woman who appreciates timeless elegance without the luxury price tag.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-ivory transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-ivory transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-ivory transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-ivory mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-ivory mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-sm tracking-wide text-ivory mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory/50 hover:text-ivory transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ivory/10 mt-12 md:mt-16" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          <p className="text-xs text-ivory/40">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {paymentIcons.map(icon => (
              <div
                key={icon.name}
                className={`w-10 h-6 ${icon.color} rounded flex items-center justify-center`}
              >
                <span className="text-white text-[10px] font-bold">{icon.name.charAt(0)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
