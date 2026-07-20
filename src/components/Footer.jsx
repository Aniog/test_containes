import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale']
  };

  return (
    <footer className="bg-gray-900 text-white py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3
              className="text-2xl tracking-[0.2em] font-light mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured,
              blending timeless elegance with modern sensibility.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm tracking-wider uppercase mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                VISA
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                MC
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                AMEX
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                PayPal
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
