import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQs', path: '/faqs' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Materials', path: '/materials' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="container-premium">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest text-velmora-cream mb-4 block"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-velmora-warm-gray mb-6 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              using 18K gold plating and hypoallergenic materials.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-serif text-sm uppercase tracking-wider mb-6">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-warm-gray hover:text-velmora-gold-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline Divider */}
        <div className="hairline mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Payment Icons */}
          <div className="flex items-center space-x-3">
            <span className="text-xs text-velmora-warm-gray uppercase tracking-wide mr-2">
              Secure Payment:
            </span>
            <div className="flex items-center space-x-2 text-velmora-warm-gray">
              <CreditCard size={24} />
              <span className="text-xs">Visa</span>
              <span className="text-xs">MC</span>
              <span className="text-xs">Amex</span>
              <span className="text-xs">PayPal</span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-velmora-warm-gray">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
