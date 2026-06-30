import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, Shield } from 'lucide-react';

const Footer = () => {
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
        { name: 'Our Story', path: '/about' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Careers', path: '/careers' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  return (
    <footer className="bg-velmora-charcoal text-white">
      {/* Trust Badges */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex items-center justify-center space-x-3 text-sm">
              <Truck size={20} className="text-velmora-gold" />
              <span className="tracking-wide">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <Shield size={20} className="text-velmora-gold" />
              <span className="tracking-wide">30-Day Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <CreditCard size={20} className="text-velmora-gold" />
              <span className="tracking-wide">18K Gold Plated</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-sm">
              <Shield size={20} className="text-velmora-gold" />
              <span className="tracking-wide">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-3xl font-serif tracking-widest block mb-6">
              VELMORA
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              using 18K gold plating and hypoallergenic materials for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-velmora-gold transition-colors text-sm"
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
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
                alt="American Express"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
                alt="PayPal"
                className="h-6 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
