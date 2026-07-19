import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in New York, worn everywhere.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-white mb-4">
              Shop
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((l) => (
                <li key={l}>
                  <Link
                    to="/shop"
                    className="text-sm text-velmora-taupe hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-white mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((l) => (
                <li key={l}>
                  <span className="text-sm text-velmora-taupe hover:text-white transition-colors cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-medium text-white mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((l) => (
                <li key={l}>
                  <span className="text-sm text-velmora-taupe hover:text-white transition-colors cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-xs text-velmora-taupe hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="text-xs text-velmora-taupe hover:text-white transition-colors cursor-pointer">
              <Facebook className="w-4 h-4" />
            </span>
            <span className="text-xs text-velmora-taupe hover:text-white transition-colors cursor-pointer">
              <Twitter className="w-4 h-4" />
            </span>
          </div>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1 rounded text-velmora-taupe"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
