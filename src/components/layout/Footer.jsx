import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Size Guide', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Journal', 'Sustainability', 'Careers'],
  },
];

const paymentIcons = [
  'Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay',
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo + social */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-cream-50">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-cream-50/60 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted for women who appreciate quiet luxury. Each piece is designed to be treasured — and to treasure you.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="p-2 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-gold-400 transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest font-medium text-cream-50/90 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream-50/60 hover:text-cream-50 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-cream-50/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream-50/40">We accept</span>
            <div className="flex items-center gap-2">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] uppercase tracking-wider bg-cream-50/10 text-cream-50/60 px-2 py-1 rounded"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}