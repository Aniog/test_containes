import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-velmora-cream py-16 mt-20">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-light tracking-widest text-velmora-cream mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </h3>
            <p className="text-sm text-velmora-beige leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention,
              made to last, and priced for real life.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-gold-light">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers'].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-velmora-beige hover:text-velmora-gold-light transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-gold-light">
              Help
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-velmora-beige hover:text-velmora-gold-light transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-gold-light">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Stockists'].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-velmora-beige hover:text-velmora-gold-light transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Payment Icons and Social Links */}
        <div className="border-t border-velmora-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <CreditCard size={24} className="text-velmora-beige" />
            <span className="text-sm text-velmora-beige">
              Secure payments via Stripe, PayPal, Apple Pay
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Twitter, label: 'Twitter' }
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-velmora-beige hover:text-velmora-gold-light transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-velmora-charcoal">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}