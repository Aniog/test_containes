import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop?category=sets' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '/#about' },
    { name: 'Journal', path: '/#journal' },
    { name: 'Sustainability', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal-700 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl font-medium tracking-wider text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-cream-300 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-cream-50 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-cream-50 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-cream-50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-400 text-xs">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-cream-400 text-xs font-medium bg-charcoal-600 px-2 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
