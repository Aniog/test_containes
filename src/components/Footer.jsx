import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'New Arrivals', path: '/collections/new' },
  ];

  const helpLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Shipping & Returns', path: '/shipping-returns' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'Size Guide', path: '/size-guide' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' },
  ];

  const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'PayPal'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-wider inline-block mb-4"
              style={{ letterSpacing: '0.2em', color: 'var(--color-gold-muted)' }}
            >
              VELMORA
            </Link>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              Demi-fine jewelry crafted to be treasured. Sustainable luxury for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="footer-column-title">Shop</h4>
            {shopLinks.map((link) => (
              <Link key={link.name} to={link.path} className="footer-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Help */}
          <div>
            <h4 className="footer-column-title">Help</h4>
            {helpLinks.map((link) => (
              <Link key={link.name} to={link.path} className="footer-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.name} to={link.path} className="footer-link">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="px-2 py-1 text-xs rounded"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)'
                  }}
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;