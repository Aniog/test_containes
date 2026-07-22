import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Affiliates', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-velvet-950 text-velvet-200 pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl tracking-superwide font-serif font-semibold text-white">
              VELMORA
            </Link>
            <p className="text-sm text-velvet-400 mt-4 leading-relaxed font-sans font-light max-w-[260px]">
              Demi-fine gold jewelry designed for the modern woman. Crafted to be treasured, priced to be worn every day.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-white transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white font-sans font-medium mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-velvet-400 hover:text-white transition-colors font-sans font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white font-sans font-medium mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-velvet-400 hover:text-white transition-colors font-sans font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-white font-sans font-medium mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/about" className="text-sm text-velvet-400 hover:text-white transition-colors font-sans font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-velvet-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-500 font-sans font-light order-2 md:order-1">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-velvet-500 font-sans font-light order-1 md:order-2">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
