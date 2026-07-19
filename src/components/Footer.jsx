import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100">
      <div className="mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-semibold">
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm text-warmgray-400 leading-relaxed">
              Demi-fine jewelry designed for everyday luxury. Ethically crafted,
              thoughtfully priced, and made to be treasured for years.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-100 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-semibold text-cream-50 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/shop"
                    className="text-sm text-warmgray-400 hover:text-cream-50 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-semibold text-cream-50 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-warmgray-400 hover:text-cream-50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase font-semibold text-cream-50 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-warmgray-400 hover:text-cream-50 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warmgray-500">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-warmgray-500">
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
