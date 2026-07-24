import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest-xl font-semibold text-velmora-cream hover:text-velmora-gold transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-stone leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in small
              batches with intention and care.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-velmora-cream mb-6">
              Shop
            </h3>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-velmora-cream mb-6">
              Help
            </h3>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium text-velmora-cream mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-velmora-charcoal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-taupe">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-velmora-taupe">
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
};

export default Footer;
