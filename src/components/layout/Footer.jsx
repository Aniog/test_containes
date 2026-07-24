import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { label: 'All Products', path: '/shop' },
        { label: 'Earrings', path: '/shop?category=Earrings' },
        { label: 'Necklaces', path: '/shop?category=Necklaces' },
        { label: 'Huggies', path: '/shop?category=Huggies' },
        { label: 'Gift Sets', path: '/shop?category=Sets' }
      ]
    },
    {
      title: 'Help',
      links: [
        { label: 'FAQ', path: '/faq' },
        { label: 'Shipping & Returns', path: '/shipping' },
        { label: 'Size Guide', path: '/size-guide' },
        { label: 'Care Instructions', path: '/care' },
        { label: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Velmora', path: '/about' },
        { label: 'Our Journal', path: '/journal' },
        { label: 'Sustainability', path: '/sustainability' },
        { label: 'Press', path: '/press' },
        { label: 'Careers', path: '/careers' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/velmora', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/velmora', label: 'Facebook' },
    { icon: Mail, href: 'mailto:hello@velmora.com', label: 'Email' }
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-velmora-charcoal text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="text-3xl font-serif tracking-widest text-white mb-4 block">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Timeless demi-fine jewelry crafted with love and attention to detail.
              Each piece is designed to be treasured and worn with confidence.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4 tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-velmora-gold transition-colors duration-300"
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
        <div className="hairline mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs mr-2">Secure Payment:</span>
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="px-3 py-1 bg-white/10 text-xs rounded border border-white/10"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4 text-sm">
            <Link to="/privacy" className="hover:text-velmora-gold transition-colors duration-300">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-velmora-gold transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
