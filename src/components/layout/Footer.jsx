import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
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
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/journal', label: 'Journal' },
      { to: '/careers', label: 'Careers' },
    ],
  };

  return (
    <footer className="bg-charcoal-800 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest text-cream-50 hover:text-gold-300 transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-200/70 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured, 
              priced to be accessible. Every piece tells a story of elegance and grace.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-200/70 hover:text-gold-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/50 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream-200/50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
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
      <div className="border-t border-cream-200/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-200/50">
              &copy; 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 bg-cream-200/10 rounded text-xs text-cream-200/70 font-mono">
                VISA
              </div>
              <div className="px-3 py-1.5 bg-cream-200/10 rounded text-xs text-cream-200/70 font-mono">
                MC
              </div>
              <div className="px-3 py-1.5 bg-cream-200/10 rounded text-xs text-cream-200/70 font-mono">
                AMEX
              </div>
              <div className="px-3 py-1.5 bg-cream-200/10 rounded text-xs text-cream-200/70 font-mono">
                PP
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-cream-200/50">
              <Link to="/privacy" className="hover:text-cream-200/80 transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-cream-200/80 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
