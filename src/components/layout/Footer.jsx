import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Huggies', href: '/shop?category=huggies' },
      { label: 'Gift Sets', href: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Instructions', href: '/care' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Press', href: '/press' },
      { label: 'Careers', href: '/careers' },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-cream/80">
      {/* Newsletter band */}
      <div className="border-b border-velmora-gold/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-heading-2 text-velmora-cream mb-2">
                Join the Inner Circle
              </h3>
              <p className="text-body-sm text-velmora-cream/60">
                10% off your first order, plus exclusive access to new arrivals.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-5 py-3.5 bg-velmora-dark border border-velmora-gold/20 text-velmora-cream placeholder:text-velmora-cream/30 font-sans text-body-sm focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-velmora-gold text-velmora-cream font-sans text-caption uppercase tracking-ultra-wide hover:bg-velmora-gold-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-mega-wide text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-body-sm text-velmora-cream/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman — 
              premium quality, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-velmora-gold/20 flex items-center justify-center text-velmora-cream/60 hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-gold mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-body-sm text-velmora-cream/50 hover:text-velmora-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & copyright */}
        <div className="mt-12 pt-8 border-t border-velmora-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-2 text-velmora-cream/30 text-xs font-sans">
                <span className="px-2 py-1 border border-velmora-cream/10 rounded">VISA</span>
                <span className="px-2 py-1 border border-velmora-cream/10 rounded">MC</span>
                <span className="px-2 py-1 border border-velmora-cream/10 rounded">AMEX</span>
                <span className="px-2 py-1 border border-velmora-cream/10 rounded">PayPal</span>
              </div>
            </div>
            <p className="text-xs text-velmora-cream/30 font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
