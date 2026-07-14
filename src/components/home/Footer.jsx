import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    shop: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Gift Sets' },
    ],
    help: [
      { to: '/help/shipping', label: 'Shipping & Returns' },
      { to: '/help/care', label: 'Jewelry Care' },
      { to: '/help/sizing', label: 'Sizing Guide' },
      { to: '/help/faq', label: 'FAQ' },
      { to: '/help/contact', label: 'Contact Us' },
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl font-semibold tracking-widest text-[#1a1a1a]">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-[#5c5c5c] leading-relaxed">
              Demi-fine jewelry designed for the modern woman. Crafted with care, worn with confidence.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c5c5c] hover:text-[#b8860b] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium text-[#1a1a1a] mb-4 text-sm tracking-wider uppercase">Shop</h4>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#5c5c5c] hover:text-[#b8860b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium text-[#1a1a1a] mb-4 text-sm tracking-wider uppercase">Help</h4>
            <ul className="space-y-2.5">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#5c5c5c] hover:text-[#b8860b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-[#1a1a1a] mb-4 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#5c5c5c] hover:text-[#b8860b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a3a3a3]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-[#a3a3a3] hover:text-[#5c5c5c] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-[#a3a3a3] hover:text-[#5c5c5c] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
