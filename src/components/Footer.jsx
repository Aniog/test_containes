import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping Info', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Press'],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay'];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Logo + Social */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="font-serif text-2xl md:text-3xl tracking-widest text-gold">
              VELMORA
            </span>
            <p className="text-charcoal-muted text-sm mt-2 max-w-xs">
              Demi-fine jewelry crafted to be treasured — for generations, for every moment.
            </p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase text-gold font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment + Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {paymentIcons.map ((icon) => (
              <span
                key={icon}
                className="text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded uppercase tracking-wider"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/30">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}