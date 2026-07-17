import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const footerColumns = [
    {
      title: 'Shop',
      links: ['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals', 'Best Sellers'],
    },
    {
      title: 'Help',
      links: ['FAQ', 'Shipping', 'Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-[#2C2C2C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-light tracking-[0.2em] font-['Cormorant_Garamond'] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 px-3 py-1 rounded text-xs">VISA</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">MC</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">AMEX</div>
              <div className="bg-white/10 px-3 py-1 rounded text-xs">PAYPAL</div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
