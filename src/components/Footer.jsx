import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', to: '/journal' },
      { label: 'Returns & Exchanges', to: '/journal' },
      { label: 'Jewelry Care', to: '/journal' },
      { label: 'Size Guide', to: '/journal' },
      { label: 'Contact Us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-2xl uppercase tracking-[0.32em] text-ivory">
              Velmora
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-espresso-300">
              Demi-fine jewelry in warm 18K gold — designed in small batches, made to be worn
              daily and treasured for years.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center border border-espresso-700 text-espresso-300 transition-all duration-300 hover:border-bronze hover:text-bronze-light"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-medium uppercase tracking-luxe text-bronze-light">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-espresso-300 transition-colors duration-300 hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-espresso-700 pt-8 md:flex-row">
          <p className="text-xs text-espresso-300">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-espresso-300">
            <CreditCard className="h-5 w-5" strokeWidth={1.5} />
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="border border-espresso-700 px-2 py-1 text-[10px] uppercase tracking-wider"
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
