import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Shipping & Returns', to: '/shipping' },
      { label: 'Care Guide', to: '/care' },
      { label: 'Size Guide', to: '/size' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Press', to: '/press' },
    ],
  },
];

const PAYMENT_BADGES = ['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL', 'APPLE PAY'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.25em] font-light"
            >
              VELMORA
            </Link>
            <p className="mt-6 text-sm text-ivory/70 leading-relaxed max-w-xs font-sans">
              Demi-fine jewelry, crafted in small batches with 18K gold plate over recycled brass. Designed in New York.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a aria-label="Instagram" href="#" className="text-ivory/70 hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a aria-label="Twitter" href="#" className="text-ivory/70 hover:text-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a aria-label="Facebook" href="#" className="text-ivory/70 hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2 md:col-start-auto">
              <h4 className="text-xs uppercase tracking-eyebrow text-gold font-medium">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/80 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-eyebrow text-gold font-medium">
              Stay in touch
            </h4>
            <p className="mt-5 text-sm text-ivory/70 leading-relaxed">
              Quiet emails. New pieces, no noise.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-ivory/50 font-sans">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENT_BADGES.map((badge) => (
              <span
                key={badge}
                className="text-[10px] tracking-[0.2em] text-ivory/60 border border-ivory/15 px-3 py-1.5 font-sans"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
