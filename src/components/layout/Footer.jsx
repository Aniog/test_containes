import { Link } from 'react-router-dom';
import { Instagram, Send } from 'lucide-react';

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
      { label: 'Shipping', to: '/help/shipping' },
      { label: 'Returns & Exchanges', to: '/help/returns' },
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

const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay'];

function PaymentMark({ label }) {
  return (
    <div className="h-7 min-w-[42px] px-2 flex items-center justify-center border border-ivory/20 rounded-sm text-[9px] uppercase tracking-widest-2 text-ivory/70">
      {label}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-page py-20 md:py-28">
        {/* top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.18em] uppercase text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-6 text-sm text-ivory/60 max-w-sm leading-relaxed">
              Demi-fine jewelry, made to be worn every day and treasured for years. Designed in small batches, finished by hand.
            </p>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest-2 text-gold-soft mb-4">
                Follow
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-9 h-9 border border-ivory/20 rounded-full transition-colors duration-300 ease-editorial hover:border-gold-soft hover:text-gold-soft"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.4} />
                </a>
                <a
                  href="https://tiktok.com"
                  aria-label="TikTok"
                  className="inline-flex items-center justify-center w-9 h-9 border border-ivory/20 rounded-full transition-colors duration-300 ease-editorial hover:border-gold-soft hover:text-gold-soft"
                >
                  <Send className="w-4 h-4" strokeWidth={1.4} />
                </a>
              </div>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-[11px] uppercase tracking-widest-2 text-gold-soft mb-5">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/75 transition-colors duration-300 ease-editorial hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-widest-2 text-gold-soft mb-5">
              Stay in touch
            </p>
            <p className="text-sm text-ivory/75 leading-relaxed">
              Letters from the studio, twice a month. Early access, styling notes, no noise.
            </p>
            <form
              className="mt-5 flex items-center border-b border-ivory/30"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                className="flex-1 bg-transparent border-0 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="ml-2 text-[11px] uppercase tracking-widest-2 text-gold-soft hover:text-ivory transition-colors duration-300 ease-editorial"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* hairline */}
        <div className="my-12 h-px w-full bg-ivory/15" />

        {/* bottom: payments + copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT_METHODS.map((m) => (
              <PaymentMark key={m} label={m} />
            ))}
          </div>
          <p className="text-[11px] uppercase tracking-widest-2 text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  );
}
