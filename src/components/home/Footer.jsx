import { Link } from 'react-router-dom';
import { Instagram, Youtube, Globe } from 'lucide-react';

const footerColumns = [
  {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['Our Story', 'Journal', 'Sustainability', 'Careers', 'Stockists'],
  },
];

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Shop Pay', 'Afterpay'];

export default function Footer() {
  return (
    <footer className="bg-warm-charcoal text-cream/80">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream inline-block mb-6">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed for the woman who values quiet elegance.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Youtube, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-cream/50 hover:text-gold transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-cream/90 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-cream/60 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[10px] uppercase tracking-wider text-cream/50 bg-cream/5 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}