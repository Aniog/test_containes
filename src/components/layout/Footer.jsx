import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', to: '/collections' },
      { label: 'Earrings', to: '/collections?category=earrings' },
      { label: 'Necklaces', to: '/collections?category=necklaces' },
      { label: 'Huggies', to: '/collections?category=huggies' },
      { label: 'Gift Sets', to: '/collections?category=sets' }
    ],
    help: [
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'Care Instructions', to: '/care' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'FAQs', to: '/faq' }
    ],
    company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' }
    ]
  };

  const paymentIcons = [
    { name: 'Visa', letter: 'V' },
    { name: 'Mastercard', letter: 'M' },
    { name: 'Amex', letter: 'A' },
    { name: 'PayPal', letter: 'P' },
    { name: 'Apple Pay', letter: '⬡' }
  ];

  return (
    <footer className="bg-[var(--velmora-charcoal)] text-[var(--velmora-gray-100)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-wider text-white">
                VELMORA
              </span>
            </Link>
            <p className="text-[var(--velmora-gray-400)] leading-relaxed mb-6 max-w-sm">
              Handcrafted demi-fine jewelry designed to be treasured. Each piece is made with 18K gold plating for everyday luxury.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--velmora-gray-600)] flex items-center justify-center hover:border-[var(--velmora-gold)] hover:text-[var(--velmora-gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--velmora-gray-600)] flex items-center justify-center hover:border-[var(--velmora-gold)] hover:text-[var(--velmora-gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--velmora-gray-600)] flex items-center justify-center hover:border-[var(--velmora-gold)] hover:text-[var(--velmora-gold)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider uppercase text-sm">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[var(--velmora-gray-400)] hover:text-[var(--velmora-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider uppercase text-sm">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[var(--velmora-gray-400)] hover:text-[var(--velmora-gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wider uppercase text-sm">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[var(--velmora-gray-400)] hover:text-[var(--velmora-gold)] transition-colors"
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
      <div className="border-t border-[var(--velmora-gray-600)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[var(--velmora-gray-400)]">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map(icon => (
                <div
                  key={icon.name}
                  className="w-10 h-6 bg-[var(--velmora-gray-600)] rounded flex items-center justify-center text-xs font-medium text-white"
                  title={icon.name}
                >
                  {icon.letter}
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm text-[var(--velmora-gray-400)]">
              <Link to="/privacy" className="hover:text-[var(--velmora-gold)] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[var(--velmora-gold)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
