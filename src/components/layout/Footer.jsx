import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, CircleDot } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
      { name: 'Size Guide', path: '/size-guide' },
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

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

  return (
    <footer className="bg-[var(--velmora-charcoal)] text-[var(--velmora-warm-white)]">
      {/* Main Footer */}
      <div className="velmora-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-semibold tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--velmora-taupe)' }}>
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with quality materials, and priced to be accessible. Because everyone deserves 
              a little luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--velmora-gold)]"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--velmora-gold)]"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--velmora-gold)]"
                aria-label="Pinterest"
              >
                <CircleDot size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--velmora-taupe)' }}>
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--velmora-gold)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--velmora-taupe)' }}>
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--velmora-gold)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--velmora-taupe)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--velmora-gold)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="hairline mt-12 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--velmora-taupe)' }}>
            &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="px-3 py-1.5 text-xs font-medium rounded"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'var(--velmora-taupe)'
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs transition-colors hover:text-[var(--velmora-gold)]" style={{ color: 'var(--velmora-taupe)' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs transition-colors hover:text-[var(--velmora-gold)]" style={{ color: 'var(--velmora-taupe)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
