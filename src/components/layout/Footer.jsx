import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-charcoal text-base-cream">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="font-display text-3xl font-semibold tracking-wider text-base-cream inline-block mb-6"
              >
                VELMORA
              </Link>
              <p className="text-base-subtle text-sm leading-relaxed mb-6">
                Demi-fine jewelry crafted for the modern woman. Quiet luxury, warm and timeless.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-base-subtle/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-base-subtle/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-base-subtle/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Shop column */}
            <div>
              <h4 className="font-display text-lg font-medium mb-6 text-base-cream">Shop</h4>
              <ul className="space-y-3">
                {['Earrings', 'Necklaces', 'Huggies', 'Sets', 'New Arrivals', 'Bestsellers'].map((item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-base-subtle hover:text-gold transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help column */}
            <div>
              <h4 className="font-display text-lg font-medium mb-6 text-base-cream">Help</h4>
              <ul className="space-y-3">
                {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Track Order'].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-sm text-base-subtle hover:text-gold transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4 className="font-display text-lg font-medium mb-6 text-base-cream">Company</h4>
              <ul className="space-y-3">
                {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates', 'Wholesale'].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-sm text-base-subtle hover:text-gold transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-hairline opacity-20" />

          {/* Bottom bar */}
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-base-subtle">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-xs text-base-subtle hover:text-gold transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-base-subtle hover:text-gold transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
            {/* Payment icons placeholder */}
            <div className="flex items-center gap-3 text-base-subtle">
              <span className="text-xs">Visa</span>
              <span className="text-xs">Mastercard</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
