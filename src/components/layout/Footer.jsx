import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?collection=gifts' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/help/shipping' },
      { label: 'Returns', to: '/help/returns' },
      { label: 'Care Guide', to: '/help/care' },
      { label: 'Contact', to: '/help/contact' },
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

const PAYMENTS = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/90">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] uppercase text-cream"
            >
              Velmora
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-cream/70 max-w-xs">
              Demi-fine jewelry, made to be worn and to last. Designed in studio,
              finished by hand.
            </p>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-champagne transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-champagne transition-colors"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="hover:text-champagne transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.3em] text-champagne mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/80 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-cream/60 tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="text-[10px] tracking-[0.2em] px-3 py-1 border border-cream/20 rounded-sm text-cream/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
