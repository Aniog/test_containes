import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
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
      { label: 'Track Order', path: '/track' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
];

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay',
];

export default function Footer() {
  return (
    <footer className="bg-velvet-900 text-velvet-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velvet-400 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-velvet-600 rounded-full flex items-center justify-center text-velvet-400 hover:text-white hover:border-white transition-all duration-300"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs tracking-[0.15em] uppercase text-velvet-400 mb-4 font-sans">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-velvet-300 hover:text-white transition-colors duration-300"
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
        <div className="mt-12 pt-8 border-t border-velvet-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map(icon => (
              <span
                key={icon}
                className="text-xs text-velvet-500 bg-velvet-800 px-3 py-1.5 rounded font-medium"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-velvet-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}