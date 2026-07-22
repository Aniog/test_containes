import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { href: '/shop', label: 'All Jewelry' },
    { href: '/collections/earrings', label: 'Earrings' },
    { href: '/collections/necklaces', label: 'Necklaces' },
    { href: '/collections/huggies', label: 'Huggies' },
    { href: '/collections/sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { href: '/shipping', label: 'Shipping & Returns' },
    { href: '/sizing', label: 'Ring Sizing' },
    { href: '/care', label: 'Jewelry Care' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const companyLinks = [
    { href: '/about', label: 'Our Story' },
    { href: '/journal', label: 'Journal' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/press', label: 'Press' },
    { href: '/careers', label: 'Careers' },
  ];

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-400 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Each piece is designed to be treasured, 
              worn, and passed on. Made with 18K gold plating and hypoallergenic materials.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-charcoal-400 hover:text-gold-400 transition-colors"
                aria-label="Pinterest"
              >
                <Pinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-xs font-sans font-medium tracking-widest uppercase text-cream-200 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-xs font-sans font-medium tracking-widest uppercase text-cream-200 mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-sans font-medium tracking-widest uppercase text-cream-200 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-charcoal-500">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-charcoal-500 uppercase tracking-wider">
                We Accept
              </span>
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div className="w-10 h-6 bg-cream-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold text-charcoal-800">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-10 h-6 bg-cream-100 rounded flex items-center justify-center">
                  <span className="text-[8px] font-bold text-charcoal-800">MC</span>
                </div>
                {/* Amex */}
                <div className="w-10 h-6 bg-cream-100 rounded flex items-center justify-center">
                  <span className="text-[7px] font-bold text-charcoal-800">AMEX</span>
                </div>
                {/* PayPal */}
                <div className="w-10 h-6 bg-cream-100 rounded flex items-center justify-center">
                  <span className="text-[6px] font-bold text-charcoal-800">PayPal</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs text-charcoal-500 hover:text-cream-100 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-xs text-charcoal-500 hover:text-cream-100 transition-colors">
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
