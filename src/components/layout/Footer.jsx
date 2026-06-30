import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' },
    ],
    help: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Size Guide', path: '/size-guide' },
      { name: 'Care Instructions', path: '/care' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press', path: '/press' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
    { name: 'Heart', icon: Pinterest, path: 'https://pinterest.com' },
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-charcoal-900 text-cream-50">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] uppercase inline-block mb-6"
            >
              Velmora
            </Link>
            <p className="text-charcoal-300 text-sm leading-relaxed max-w-sm mb-8">
              Fine jewelry crafted for the moments that matter. Each piece is designed to be treasured, 
              worn, and passed on. Demi-fine luxury, thoughtfully made.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-charcoal-700 flex items-center justify-center hover:border-accent hover:text-accent transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-charcoal-400 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-charcoal-400 mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-charcoal-400 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-charcoal-300 hover:text-cream-50 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-wider text-charcoal-500">
                We accept
              </span>
              <div className="flex items-center gap-3">
                {paymentIcons.map((icon) => (
                  <div
                    key={icon}
                    className="px-2 py-1 bg-charcoal-800 rounded text-[9px] uppercase tracking-wider text-charcoal-400"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
