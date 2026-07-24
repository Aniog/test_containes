import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const PinterestIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const Footer = () => {
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
      { name: 'Press', path: '/press' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-espresso)', color: 'var(--color-cream)' }}>
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.2em] font-medium text-[var(--color-cream)]"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-sand)' }}>
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who appreciates quiet luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--color-gold)]"
                style={{ color: 'var(--color-sand)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--color-gold)]"
                style={{ color: 'var(--color-sand)' }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors hover:text-[var(--color-gold)]"
                style={{ color: 'var(--color-sand)' }}
                aria-label="Pinterest"
              >
                <PinterestIcon />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: 'var(--color-sand)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: 'var(--color-sand)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--color-gold)' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-[var(--color-gold)]"
                    style={{ color: 'var(--color-sand)' }}
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
      <div className="border-t" style={{ borderColor: 'rgba(232, 226, 217, 0.15)' }}>
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: 'var(--color-taupe)' }}>
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs" style={{ color: 'var(--color-taupe)' }}>We accept</span>
              <div className="flex gap-2">
                <div className="px-3 py-1.5 text-xs font-medium rounded" style={{ backgroundColor: 'rgba(232, 226, 217, 0.1)', color: 'var(--color-sand)' }}>
                  Visa
                </div>
                <div className="px-3 py-1.5 text-xs font-medium rounded" style={{ backgroundColor: 'rgba(232, 226, 217, 0.1)', color: 'var(--color-sand)' }}>
                  Mastercard
                </div>
                <div className="px-3 py-1.5 text-xs font-medium rounded" style={{ backgroundColor: 'rgba(232, 226, 217, 0.1)', color: 'var(--color-sand)' }}>
                  Amex
                </div>
                <div className="px-3 py-1.5 text-xs font-medium rounded" style={{ backgroundColor: 'rgba(232, 226, 217, 0.1)', color: 'var(--color-sand)' }}>
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
