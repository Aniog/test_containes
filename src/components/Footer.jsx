import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-base text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra font-medium">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-stone leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed in London, worn worldwide.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-stone hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-velmora-stone hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Terms & Privacy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-velmora-stone hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-velmora-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Mail, label: 'Email' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-velmora-stone hover:text-velmora-gold transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
                <span key={brand} className="text-[10px] font-medium tracking-wider uppercase text-velmora-stone border border-white/10 px-2 py-1 rounded">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
