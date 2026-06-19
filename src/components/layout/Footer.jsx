import { Link } from 'react-router-dom';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';

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
      { label: 'Contact Us', path: '/contact' },
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

const paymentIcons = [
  { name: 'Visa', icon: 'M2 4h20v16H2V4zm2 2v12h16V6H4z' },
  { name: 'Mastercard', icon: 'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z' },
  { name: 'PayPal', icon: 'M6 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6V4z' },
  { name: 'Amex', icon: 'M4 6h16l-3 6 3 6H4l3-6-3-6z' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-cream-50 inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-cream-300 text-sm leading-relaxed max-w-xs mb-6">
              Demi-fine gold jewelry crafted to be treasured. Ethically made, beautifully packaged.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Pinterest">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="text-cream-400 hover:text-gold-400 transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-cream-50 text-xs tracking-widest uppercase font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-cream-400 text-sm hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline */}
        <div className="h-px bg-ink-700 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-500 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {paymentIcons.map((p) => (
              <div key={p.name} className="text-cream-500 hover:text-cream-300 transition-colors" title={p.name}>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d={p.icon} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}