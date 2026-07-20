import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/collections/earrings', label: 'Earrings' },
      { to: '/collections/necklaces', label: 'Necklaces' },
      { to: '/collections/huggies', label: 'Huggies' },
      { to: '/collections/sets', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/help/shipping', label: 'Shipping' },
      { to: '/help/returns', label: '30-Day Returns' },
      { to: '/help/care', label: 'Materials & Care' },
      { to: '/help/size', label: 'Size Guide' },
      { to: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
      { to: '/careers', label: 'Careers' },
    ],
  },
];

const PAYMENTS = ['Visa', 'Mastercard', 'American Express', 'PayPal', 'Apple Pay', 'Google Pay'];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand bg-linen/60">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-espresso"
            >
              VELMORA
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mink">
              Demi-fine jewelry, hand-finished in 18K gold plate. Designed in
              New York, made to be worn — and treasured — for years.
            </p>
            <div className="mt-6 flex items-center gap-4 text-espresso">
              <a
                href="#instagram"
                aria-label="Velmora on Instagram"
                className="hover:text-gold-deep"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="#facebook"
                aria-label="Velmora on Facebook"
                className="hover:text-gold-deep"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="#youtube"
                aria-label="Velmora on YouTube"
                className="hover:text-gold-deep"
              >
                <Youtube className="h-4 w-4" strokeWidth={1.25} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email Velmora"
                className="hover:text-gold-deep"
              >
                <Mail className="h-4 w-4" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-mink transition-colors duration-300 hover:text-espresso"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter (mini) */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.24em] text-espresso">
              Stay close
            </h4>
            <p className="mt-5 text-sm text-mink">
              Quiet drops, no spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center border-b border-espresso/20 pb-1"
            >
              <input
                type="email"
                placeholder="email@yours.com"
                className="flex-1 bg-transparent text-sm placeholder:text-stone focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-espresso hover:text-gold-deep"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-sand pt-8 text-[11px] uppercase tracking-[0.18em] text-mink md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry</div>
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="border border-sand bg-bone px-2 py-1 text-[9px] tracking-[0.15em] text-mink"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-espresso">Privacy</Link>
            <Link to="/terms" className="hover:text-espresso">Terms</Link>
            <Link to="/accessibility" className="hover:text-espresso">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
