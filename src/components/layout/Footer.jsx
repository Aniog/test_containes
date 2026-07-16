import { Link } from 'react-router-dom';
import { Instagram, Twitter, Pinterest } from 'lucide-react';

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-brand-deep">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the woman who values quiet luxury and timeless design.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs tracking-[0.15em] uppercase text-brand-deep font-medium mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-brand-muted hover:text-brand-deep transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span
                key={method}
                className="text-[10px] tracking-[0.1em] uppercase text-brand-muted border border-brand-border px-2 py-1"
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