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
    { name: 'Contact Us', path: '/contact' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQs', path: '/faq' },
  ],
  company: [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, path: 'https://instagram.com' },
  { name: 'Facebook', icon: Facebook, path: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, path: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-white">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-warm-300 text-sm leading-relaxed">
              Timeless demi-fine jewelry crafted for the modern woman. 
              Ethically made, beautifully designed.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-400 hover:text-gold-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-extra-wide text-warm-400 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-extra-wide text-warm-400 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-200 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-extra-wide text-warm-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-200 hover:text-gold-400 transition-colors duration-300"
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
      <div className="border-t border-warm-700">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-warm-500">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-warm-500 uppercase tracking-wide">We Accept</span>
              <div className="flex items-center gap-2">
                {/* Visa */}
                <svg className="h-6 w-auto text-warm-400" viewBox="0 0 38 24" fill="currentColor">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.1"/>
                  <text x="19" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">VISA</text>
                </svg>
                {/* Mastercard */}
                <svg className="h-6 w-auto text-warm-400" viewBox="0 0 38 24" fill="currentColor">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.1"/>
                  <circle cx="15" cy="12" r="6" fill="currentColor" opacity="0.6"/>
                  <circle cx="23" cy="12" r="6" fill="currentColor" opacity="0.6"/>
                </svg>
                {/* Amex */}
                <svg className="h-6 w-auto text-warm-400" viewBox="0 0 38 24" fill="currentColor">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.1"/>
                  <text x="19" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">AMEX</text>
                </svg>
                {/* PayPal */}
                <svg className="h-6 w-auto text-warm-400" viewBox="0 0 38 24" fill="currentColor">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.1"/>
                  <text x="19" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">PayPal</text>
                </svg>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs text-warm-500">
              <Link to="/privacy" className="hover:text-warm-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-warm-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
