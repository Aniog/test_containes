import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/sizing', label: 'Ring Sizing' },
    { to: '/care', label: 'Jewelry Care' },
    { to: '/faq', label: 'FAQ' },
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-obsidian text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-extra-wide text-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-300 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, made to be worn every day.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-velvet-400 hover:text-champagne transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide text-velvet-400 uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velvet-200 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide text-velvet-400 uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velvet-200 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide text-velvet-400 uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-velvet-200 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-velvet-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velvet-500">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 bg-velvet-800 rounded text-xs text-velvet-300 font-medium">
                VISA
              </div>
              <div className="px-2 py-1 bg-velvet-800 rounded text-xs text-velvet-300 font-medium">
                MC
              </div>
              <div className="px-2 py-1 bg-velvet-800 rounded text-xs text-velvet-300 font-medium">
                AMEX
              </div>
              <div className="px-2 py-1 bg-velvet-800 rounded text-xs text-velvet-300 font-medium">
                PAYPAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
