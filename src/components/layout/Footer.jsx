import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'],
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-wide inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-dark-fg/60 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in small batches with intention, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-medium uppercase tracking-wide mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-dark-fg/60 hover:text-dark-fg transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-dark-fg/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-fg/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-dark-fg/40">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((pm) => (
                <span
                  key={pm}
                  className="text-[10px] px-2 py-1 rounded border border-dark-fg/20 text-dark-fg/50"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
