import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Heart, label: 'Pinterest', href: '#' },
  { icon: Heart, label: 'Twitter', href: '#' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-midnight-950 text-pearl-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream-50">
              VELMORA
            </Link>
            <p className="text-sm text-pearl-400 mt-3 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Quiet luxury, enduring beauty.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-pearl-400 hover:text-cream-50 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-50 mb-4">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-pearl-400 hover:text-cream-50 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-50 mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-pearl-400 hover:text-cream-50 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-cream-50 mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-pearl-400 hover:text-cream-50 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-midnight-800 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Payment icons */}
          <div className="flex gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-xs text-pearl-500 bg-midnight-800/50 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-pearl-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}