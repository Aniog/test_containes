import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=earrings' },
      { name: 'Necklaces', path: '/shop?category=necklaces' },
      { name: 'Huggies', path: '/shop?category=huggies' },
      { name: 'Gift Sets', path: '/shop?category=sets' }
    ],
    help: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Size Guide', path: '/size-guide' }
    ],
    company: [
      { name: 'Our Story', path: '/about' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'Careers', path: '/careers' }
    ]
  };

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-velmora-gold-light text-sm leading-relaxed max-w-sm">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates quiet luxury and timeless elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-velmora-warm-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-velmora-warm-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-velmora-warm-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-gold-light hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-gold-light hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-velmora-gold-light hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-velmora-warm-gray/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-velmora-warm-gray">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {/* Payment Icons - Simple text representation */}
              <span className="text-xs text-velmora-warm-gray px-2 py-1 border border-velmora-warm-gray/30">
                Visa
              </span>
              <span className="text-xs text-velmora-warm-gray px-2 py-1 border border-velmora-warm-gray/30">
                Mastercard
              </span>
              <span className="text-xs text-velmora-warm-gray px-2 py-1 border border-velmora-warm-gray/30">
                Amex
              </span>
              <span className="text-xs text-velmora-warm-gray px-2 py-1 border border-velmora-warm-gray/30">
                PayPal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}