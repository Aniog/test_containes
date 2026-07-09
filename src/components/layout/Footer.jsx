import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Best Sellers', path: '/shop?sort=bestsellers' },
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
    <footer className="bg-velmora-charcoal text-velmora-cream">
      {/* Trust Badges */}
      <div className="border-b border-velmora-gold/20">
        <div className="container-velmora py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Truck size={20} className="text-velmora-gold" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <RefreshCw size={20} className="text-velmora-gold" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-velmora-gold font-serif text-lg">★</span>
              <span>18K Gold Plated</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-velmora-gold">✓</span>
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-velmora py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest text-velmora-cream mb-6 block"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </Link>
            <p className="text-sm text-velmora-stone mb-6 leading-relaxed">
              Quiet luxury, crafted to be treasured. Our demi-fine jewelry pieces are
              designed for the modern woman who appreciates understated elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-stone hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-lg mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-velmora-stone hover:text-velmora-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-gold/20">
        <div className="container-velmora py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-velmora-stone">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-velmora-stone">Secure payments:</span>
              <div className="flex items-center space-x-2">
                <CreditCard size={20} className="text-velmora-stone" />
                <span className="text-xs text-velmora-stone">Visa, Mastercard, Amex, PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
