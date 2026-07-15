import React from 'react';
import { Link } from 'react-router-dom';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'Bestsellers'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQs', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-cream mb-5 block">
              VELMORA
            </Link>
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs mt-4">
              Demi-fine jewelry crafted for the modern woman. 18K gold-plated, hypoallergenic, and designed to be treasured — every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream mb-5 font-medium">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/50 hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream mb-5 font-medium">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-cream/50 hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream mb-5 font-medium">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-cream/50 hover:text-cream transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'].map((method) => (
              <span key={method} className="text-[10px] text-cream/30 tracking-widest uppercase px-2 py-1 border border-cream/10">
                {method}
              </span>
            ))}
          </div>
          <div className="flex gap-6 text-xs text-cream/40">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
