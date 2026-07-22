import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-xl tracking-widest-lg text-white">
                VELMORA
              </span>
            </Link>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated, hypoallergenic, designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-white/50 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-white mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="font-sans text-sm text-white/50 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="font-sans text-sm text-white/50 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] tracking-widest uppercase text-white/30">Visa</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-white/30">Mastercard</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-white/30">Amex</span>
            <span className="font-sans text-[10px] tracking-widest uppercase text-white/30">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}