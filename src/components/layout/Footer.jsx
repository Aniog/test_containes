import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { to: '/collection', label: 'All Jewelry' },
      { to: '/collection?category=earrings', label: 'Earrings' },
      { to: '/collection?category=necklaces', label: 'Necklaces' },
      { to: '/collection?category=huggies', label: 'Huggies' },
      { to: '/collection?category=sets', label: 'Gift Sets' },
    ],
    help: [
      { to: '/shipping', label: 'Shipping & Returns' },
      { to: '/sizing', label: 'Ring Sizing' },
      { to: '/care', label: 'Jewelry Care' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact Us' },
    ],
    company: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/careers', label: 'Careers' },
    ],
  };

  const paymentIcons = [
    { name: 'Visa', letter: 'V' },
    { name: 'Mastercard', letter: 'MC' },
    { name: 'Amex', letter: 'AM' },
    { name: 'PayPal', letter: 'PP' },
  ];

  return (
    <footer className="bg-warmblack text-ivory-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-ultra-wide text-ivory-100 hover:text-gold-300 transition-colors inline-block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-ivory-300 text-sm leading-relaxed max-w-sm mb-6">
              Fine jewelry crafted for the modern woman. Each piece is designed to 
              become a treasured part of your story — accessible luxury for everyday elegance.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ivory-300/30 rounded-full hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ivory-300/30 rounded-full hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ivory-300/30 rounded-full hover:border-gold-400 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase text-ivory-200 mb-6">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory-300 hover:text-ivory-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase text-ivory-200 mb-6">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory-300 hover:text-ivory-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs tracking-extra-wide uppercase text-ivory-200 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory-300 hover:text-ivory-100 transition-colors"
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
      <div className="border-t border-ivory-100/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-ivory-400">
              © {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-7 bg-ivory-100/10 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <span className="text-xs font-bold text-ivory-300">
                    {icon.letter}
                  </span>
                </div>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-xs text-ivory-400">
              <Link to="/privacy" className="hover:text-ivory-200 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-ivory-200 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
