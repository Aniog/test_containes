import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { href: '/shop', label: 'All Jewelry' },
    { href: '/shop?category=earrings', label: 'Earrings' },
    { href: '/shop?category=necklaces', label: 'Necklaces' },
    { href: '/shop?category=huggies', label: 'Huggies' },
    { href: '/shop?category=sets', label: 'Gift Sets' },
  ];

  const helpLinks = [
    { href: '/shipping', label: 'Shipping & Returns' },
    { href: '/sizing', label: 'Ring Sizing' },
    { href: '/care', label: 'Jewelry Care' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const companyLinks = [
    { href: '/about', label: 'Our Story' },
    { href: '/journal', label: 'Journal' },
    { href: '/sustainability', label: 'Sustainability' },
    { href: '/careers', label: 'Careers' },
  ];

  const paymentIcons = ['visa', 'mastercard', 'amex', 'paypal'];

  return (
    <footer className="bg-espresso-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Each piece is designed to become a cherished part of your personal story.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <Pinterest className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                >
                  <span className="text-[10px] text-white/60 uppercase">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
