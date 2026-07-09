import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'Gift Sets', path: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', path: '#' },
    { label: 'Size Guide', path: '#' },
    { label: 'FAQ', path: '#' },
    { label: 'Contact Us', path: '#' },
    { label: 'Track Order', path: '#' },
  ],
  Company: [
    { label: 'Our Story', path: '/about' },
    { label: 'Sustainability', path: '#' },
    { label: 'Journal', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Press', path: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-velmora-900 text-velmora-200">
      {/* Main footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wider font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-400 leading-relaxed max-w-[280px]">
              Demi-fine jewelry crafted to be treasured. 18K gold-plated, hypoallergenic, and designed for everyday luxury.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs uppercase tracking-wider text-velmora-400 hover:text-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-overline text-velmora-300 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-velmora-800">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-500">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] uppercase tracking-wider text-velmora-500 bg-velmora-800 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
