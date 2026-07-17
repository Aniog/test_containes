import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { label: 'All Jewelry', path: '/shop' },
  { label: 'Earrings', path: '/shop?category=earrings' },
  { label: 'Necklaces', path: '/shop?category=necklaces' },
  { label: 'Huggies', path: '/shop?category=huggies' },
  { label: 'Gift Sets', path: '/shop?category=sets' },
];

const helpLinks = [
  { label: 'Shipping & Returns', path: '/shipping' },
  { label: 'Size Guide', path: '/size-guide' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Track Order', path: '/track' },
];

const companyLinks = [
  { label: 'Our Story', path: '/about' },
  { label: 'Journal', path: '/journal' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Press', path: '/press' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ivory-200">
      {/* Newsletter */}
      <div className="border-b border-ink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="font-serif text-3xl md:text-4xl text-ivory-50 mb-3">
            Join the Velmora Circle
          </h3>
          <p className="text-ivory-300 text-sm mb-8 max-w-md mx-auto">
            Be the first to discover new collections, receive styling tips, and enjoy 10% off your first order.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // newsletter submit
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-ink-800 border border-ink-600 text-ivory-50 placeholder:text-ink-400 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              required
            />
            <button
              type="submit"
              className="btn-gold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest-2xl text-ivory-50 hover:text-gold-400 transition-colors"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-ivory-400 text-sm leading-relaxed">
              Demi-fine jewelry crafted with intention. 18K gold plated, hypoallergenic, made to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-400 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-400 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory-400 hover:text-gold-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory-50 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory-50 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory-50 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ink-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-400 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* Payment icons */}
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span
                key={method}
                className="text-[10px] tracking-wider uppercase text-ink-500 font-sans px-2 py-1 border border-ink-700 rounded"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
