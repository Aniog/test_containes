import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  help: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Shipping Info', to: '/shipping' },
    { label: 'Returns & Exchanges', to: '/returns' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'Care Instructions', to: '/care' },
  ],
  company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Careers', to: '/careers' },
  ],
};

const paymentIcons = [
  { name: 'Visa', icon: 'Visa' },
  { name: 'Mastercard', icon: 'MC' },
  { name: 'Amex', icon: 'Amex' },
  { name: 'PayPal', icon: 'PayPal' },
  { name: 'Apple Pay', icon: 'Apple' },
];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-extra-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Timeless demi-fine jewelry crafted for the modern woman.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-velmora-gold transition-colors"
                aria-label="Pinterest"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-medium text-xs tracking-wider uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-medium text-xs tracking-wider uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-xs tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-medium text-xs tracking-wider uppercase mb-4">Stay in Touch</h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-velmora-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-gold px-4 py-2 text-sm font-medium hover:bg-velmora-gold-light transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs font-medium text-white/70"
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
