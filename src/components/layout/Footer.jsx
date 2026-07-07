import React from 'react';
import { Facebook, Instagram, Twitter, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { label: 'Earrings', href: '/shop?category=Earrings' },
    { label: 'Necklaces', href: '/shop?category=Necklaces' },
    { label: 'Huggies', href: '/shop?category=Huggies' },
    { label: 'New Arrivals', href: '/shop?sort=newest' },
    { label: 'Best Sellers', href: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const companyLinks = [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
    { label: 'Wholesale', href: '/wholesale' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/velmora', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/velmora', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/velmora', label: 'Twitter' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-[0.2em] text-velmora-ivory">
              VELMORA
            </h3>
            <p className="text-sm leading-relaxed text-velmora-mist">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              using 18K gold plating and hypoallergenic materials for everyday luxury.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velmora-mist hover:text-velmora-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-velmora-ivory">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-velmora-ivory">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-velmora-ivory">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-velmora-graphite/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6 text-velmora-mist">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="text-xs">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs">30-Day Returns</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-velmora-mist">
              <span className="text-xs">Payment methods:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-velmora-graphite rounded text-[10px] flex items-center justify-center">
                  VISA
                </div>
                <div className="w-8 h-5 bg-velmora-graphite rounded text-[10px] flex items-center justify-center">
                  MC
                </div>
                <div className="w-8 h-5 bg-velmora-graphite rounded text-[10px] flex items-center justify-center">
                  AMEX
                </div>
                <div className="w-8 h-5 bg-velmora-graphite rounded text-[10px] flex items-center justify-center">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-velmora-graphite/50 text-center">
          <p className="text-xs text-velmora-mist">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
