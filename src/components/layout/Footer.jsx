import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=earrings' },
  { label: 'Necklaces', to: '/shop?category=necklaces' },
  { label: 'Huggies', to: '/shop?category=huggies' },
  { label: 'Gift Sets', to: '/shop' },
];

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
  { label: 'Track Order', to: '#' },
];

const companyLinks = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Sustainability', to: '#' },
  { label: 'Press', to: '#' },
  { label: 'Careers', to: '#' },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-300">
      {/* Newsletter bar */}
      <div className="bg-charcoal-light border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-14">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-headline md:text-section text-cream-100 mb-2">
              Join for 10% off your first order
            </h3>
            <p className="font-sans text-body text-cream-400 mb-6">
              Be the first to know about new arrivals, exclusive offers, and jewelry care tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/[0.1] rounded text-cream-100 placeholder:text-cream-400/60 text-body font-sans focus:border-gold/50 transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold hover:bg-gold-light text-charcoal font-sans text-caption uppercase tracking-ultra-wide transition-colors duration-300 rounded whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-light text-cream-100 block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-body text-cream-400 mb-6 max-w-[240px]">
              Crafted to be treasured. Premium demi-fine jewelry for the modern woman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-cream-100 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-body text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-cream-100 mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-body text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-cream-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-body text-cream-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-divider my-8 md:my-10 opacity-10" style={{ background: 'linear-gradient(to right, transparent, #FFF, transparent)' }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-caption">
          <p className="font-sans text-cream-400/60 text-caption">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span key={icon} className="font-sans text-caption text-cream-400/40 uppercase tracking-wide">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
