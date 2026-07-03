import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Sets & Gifts', to: '/shop?category=sets' },
      { label: 'New In', to: '/shop?sort=new' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Contact us', to: '/help/contact' },
      { label: 'Shipping', to: '/help/shipping' },
      { label: 'Returns & exchanges', to: '/help/returns' },
      { label: 'Care guide', to: '/help/care' },
      { label: 'Size guide', to: '/help/size' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', to: '/about' },
      { label: 'Sustainability', to: '/about#materials' },
      { label: 'Journal', to: '/journal' },
      { label: 'Gift cards', to: '/gift-cards' },
      { label: 'Stockists', to: '/stockists' },
    ],
  },
]

const PAYMENTS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay']

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ivory-100">
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-[26px] tracking-[0.32em] text-ivory-50">
                VELMORA
              </span>
            </Link>
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-ivory-100/70">
              Demi-fine gold jewelry, designed for every day. Hand-finished in
              small batches, made to be kept.
            </p>
            <form
              className="mt-8 max-w-[360px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-[11px] uppercase tracking-[0.22em] text-ivory-100/60 mb-3">
                Join the list
              </label>
              <div className="flex items-center border-b border-ivory-100/30 focus-within:border-ivory-50">
                <Mail className="w-4 h-4 text-ivory-100/60 mr-2" strokeWidth={1.4} />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="flex-1 bg-transparent py-3 text-[14px] text-ivory-50 placeholder:text-ivory-100/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.22em] text-ivory-50 hover:text-gold-200 py-3"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-[11px] text-ivory-100/50">
                Get 10% off your first order. Unsubscribe anytime.
              </p>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory-100/60 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-[13px] text-ivory-100/85 hover:text-ivory-50 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory-100/60 mb-5">
              Follow
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 border border-ivory-100/30 flex items-center justify-center hover:border-ivory-50 hover:text-gold-200 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 border border-ivory-100/30 flex items-center justify-center hover:border-ivory-50 hover:text-gold-200 transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-9 h-9 border border-ivory-100/30 flex items-center justify-center hover:border-ivory-50 hover:text-gold-200 transition-colors"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ivory-100/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] text-ivory-100/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="text-[10px] uppercase tracking-[0.18em] text-ivory-100/60 border border-ivory-100/20 px-2.5 py-1"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
