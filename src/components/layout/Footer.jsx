import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

const socialLinks = [
  { name: 'Instagram', url: '#' },
  { name: 'Pinterest', url: '#' },
  { name: 'TikTok', url: '#' },
  { name: 'Facebook', url: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="section-padding section-margin">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <h2 className="font-serif text-2xl tracking-widest uppercase text-cream" style={{ letterSpacing: '0.3em' }}>
                  Velmora
                </h2>
              </Link>
              <p className="text-sm text-cream/60 max-w-xs leading-relaxed">
                Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman — accessible luxury that lasts.
              </p>
              
              {/* Social */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-cream/50 hover:text-gold-500 transition-colors text-xs uppercase tracking-wider"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs uppercase tracking-widest text-cream mb-4" style={{ letterSpacing: '0.2em' }}>
                  {title}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-cream/60 hover:text-gold-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-cream/10 my-10" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] uppercase tracking-wider text-cream/40 border border-cream/20 px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
