import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Jewelry', href: '/collection' },
      { name: 'Earrings', href: '/collection?category=earrings' },
      { name: 'Necklaces', href: '/collection?category=necklaces' },
      { name: 'Huggies', href: '/collection?category=huggies' },
      { name: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/shipping' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'FAQ', href: '/faq' },
    ],
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Journal', href: '/journal' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Careers', href: '/careers' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-espresso text-ivory/90">
      {/* Main Footer */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-ivory">
              VELMORA
            </Link>
            <p className="mt-4 text-ivory/60 text-sm leading-relaxed max-w-sm">
              Quiet luxury for the modern woman. Each piece is crafted to be treasured,
              designed for those who appreciate understated elegance and timeless beauty.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-ivory hover:border-ivory transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-ivory">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/60 hover:text-champagne transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-ivory">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/60 hover:text-champagne transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-ivory">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-ivory/60 hover:text-champagne transition-colors duration-300"
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
      <div className="border-t border-ivory/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-ivory/40">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-ivory/40">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                  <div
                    key={card}
                    className="px-2 py-1 bg-ivory/10 rounded text-xs text-ivory/60"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-xs text-ivory/40">
              <Link to="/privacy" className="hover:text-ivory/60 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-ivory/60 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
