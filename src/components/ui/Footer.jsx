import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[#8a8279] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday luxury, thoughtfully designed.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#c9a96e]">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[#8a8279] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#c9a96e]">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8a8279] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 text-[#c9a96e]">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[#8a8279] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#8a8279] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#8a8279] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#8a8279] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#8a8279] hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8a8279]">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-[#2a2a2a] rounded text-[10px] text-[#8a8279]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#8a8279]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
