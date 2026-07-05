import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '#' },
      { label: 'Sustainability', to: '#' },
      { label: 'Journal', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
];

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-[#2C2622] text-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.25em] text-[#C9A84C]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#B8ADA0] max-w-xs">
              Crafted to be treasured. Fine demi-fine jewelry designed for the modern woman —
              accessible luxury that lasts.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-wider uppercase text-[#B8ADA0] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-[#C9A84C] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[#B8ADA0] hover:text-[#E8DFD5] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#4A3F37] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] tracking-wider uppercase bg-[#3D332C] text-[#B8ADA0] px-2.5 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>

            <p className="text-xs text-[#8A7F74]">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
