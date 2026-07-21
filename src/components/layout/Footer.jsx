import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

const FOOTER_COLS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?sort=new', label: 'New Arrivals' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/help/shipping', label: 'Shipping' },
      { to: '/help/returns', label: 'Returns & Exchanges' },
      { to: '/help/care', label: 'Jewelry Care' },
      { to: '/help/size', label: 'Size Guide' },
      { to: '/help/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'The Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
      { to: '/wholesale', label: 'Wholesale' },
    ],
  },
]

function PaymentIcon({ children, label }) {
  return (
    <span
      title={label}
      aria-label={label}
      className="inline-flex items-center justify-center h-7 w-10 border border-line-dark/70 text-[10px] tracking-widest-2 text-cream/80"
    >
      {children}
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="container-x pt-20 pb-10">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] text-cream"
            >
              VELMORA
            </Link>
            <p className="mt-5 text-sm text-cream/60 max-w-xs leading-relaxed font-light">
              Demi-fine gold jewelry, made to be lived in. Designed in Lisbon,
              hand-finished in small batches.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-line-dark hover:border-gold-soft hover:text-gold-soft transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-line-dark hover:border-gold-soft hover:text-gold-soft transition-colors duration-300"
                aria-label="Pinterest"
              >
                <span className="block w-4 h-4 text-[10px] font-medium leading-4 text-center">P</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-line-dark hover:border-gold-soft hover:text-gold-soft transition-colors duration-300"
                aria-label="TikTok"
              >
                <span className="block w-4 h-4 text-[10px] font-medium leading-4 text-center">T</span>
              </a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="font-sans uppercase tracking-widest-2 text-[11px] font-medium text-gold-soft">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-cream/70 hover:text-cream transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="font-sans uppercase tracking-widest-2 text-[11px] font-medium text-gold-soft">
              Visit
            </h4>
            <p className="mt-5 text-sm text-cream/70 leading-relaxed">
              Atelier Velmora
              <br />
              Rua das Flores 12
              <br />
              Lisbon, Portugal
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 h-px bg-line-dark" />

        {/* Bottom: legal + payment */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <PaymentIcon label="Visa">VISA</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">AMEX</PaymentIcon>
            <PaymentIcon label="PayPal">PAYPAL</PaymentIcon>
            <PaymentIcon label="Apple Pay">APAY</PaymentIcon>
            <PaymentIcon label="Shop Pay">SHOPIFY</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}
