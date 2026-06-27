import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQ', path: '/faq' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="bg-[var(--color-ivory)] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-[var(--color-charcoal)]">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-[var(--color-text-muted)] mt-4 mb-6">
              Demi-fine jewelry crafted to be treasured. 
              Quality pieces at accessible prices.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-charcoal)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="font-sans text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="font-sans text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-[var(--color-charcoal)] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="font-sans text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-charcoal)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[var(--color-text-muted)]">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon) => (
              <div 
                key={icon}
                className="px-2 py-1 bg-[var(--color-warm-white)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-xs font-sans"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;