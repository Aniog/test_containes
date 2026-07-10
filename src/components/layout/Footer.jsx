import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: 'All Jewelry', to: '/collection' },
      { label: 'Earrings', to: '/collection?category=earrings' },
      { label: 'Necklaces', to: '/collection?category=necklaces' },
      { label: 'Huggies', to: '/collection?category=huggies' },
      { label: 'Gift Sets', to: '/collection?category=sets' },
    ],
    help: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping & Delivery', to: '/shipping' },
      { label: 'Returns & Exchanges', to: '/returns' },
      { label: 'Size Guide', to: '/size-guide' },
      { label: 'FAQ', to: '/faq' },
    ],
    company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
    ],
  };

  const paymentIcons = [
    { name: 'Visa', path: 'M9.5 6.5h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zM12.5 6.5h-2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5z' },
    { name: 'Mastercard', path: 'M12 4.5a5 5 0 100 10 5 5 0 000-10zm0 8.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z' },
    { name: 'Amex', path: 'M2 10h20v4H2v-4zm3-1h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Each piece designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
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
      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {currentYear} Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-8 h-5 border border-white/20 rounded flex items-center justify-center"
                  title={icon.name}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white/60"
                    fill="currentColor"
                  >
                    <path d={icon.path} />
                  </svg>
                </div>
              ))}
            </div>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
