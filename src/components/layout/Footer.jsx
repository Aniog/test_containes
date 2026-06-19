import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deep-brown)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif-display text-2xl tracking-[0.3em] font-light text-[var(--color-gold)]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[var(--color-soft-gray)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Timeless pieces for the modern woman.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[var(--color-soft-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--color-soft-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--color-soft-gray)] hover:text-[var(--color-gold)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold-light)]">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-[var(--color-soft-gray)] hover:text-[var(--color-cream)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold-light)]">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[var(--color-soft-gray)] hover:text-[var(--color-cream)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold-light)]">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-[var(--color-soft-gray)] hover:text-[var(--color-cream)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-[var(--color-gold-dark)]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif-display text-xl text-[var(--color-cream)]">Join for 10% off your first order</h4>
              <p className="text-sm text-[var(--color-soft-gray)] mt-1">Be the first to know about new collections and exclusive offers.</p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border border-[var(--color-gold-dark)]/40 text-[var(--color-cream)] placeholder-[var(--color-soft-gray)] px-4 py-3 text-sm w-full md:w-72 focus:outline-none focus:border-[var(--color-gold)]"
              />
              <button
                type="submit"
                className="bg-[var(--color-gold)] text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-[var(--color-gold-dark)] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-gold-dark)]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-soft-gray)]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-[var(--color-soft-gray)]">We accept</span>
            <div className="flex space-x-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="bg-[var(--color-cream)]/10 text-[var(--color-soft-gray)] text-[10px] px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
