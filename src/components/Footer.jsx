import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-deep text-velmora-sand">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-lightgray leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in small batches with intention and care.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-cream mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-velmora-lightgray hover:text-velmora-cream transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-cream mb-5">Help</h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-velmora-lightgray hover:text-velmora-cream transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-cream mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-velmora-lightgray hover:text-velmora-cream transition-colors duration-200 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-velmora-charcoal flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-xs text-velmora-lightgray">Visa</span>
            <span className="text-xs text-velmora-lightgray">Mastercard</span>
            <span className="text-xs text-velmora-lightgray">Amex</span>
            <span className="text-xs text-velmora-lightgray">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-velmora-lightgray hover:text-velmora-cream transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-lightgray hover:text-velmora-cream transition-colors">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-velmora-lightgray hover:text-velmora-cream transition-colors">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-xs text-velmora-lightgray">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
