import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-light">
              VELMORA
            </Link>
            <p className="text-light-gray text-sm mt-3 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in New York, worn worldwide.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-light-gray hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-gray hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-gray hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-light-gray hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-light-gray hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-medium tracking-ultra-wide uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-light-gray hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-light-gray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span key={method} className="text-[10px] text-light-gray border border-white/10 px-2 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
