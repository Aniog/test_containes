import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Gifting Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '#', label: 'Shipping & Delivery' },
      { to: '#', label: 'Returns & Exchanges' },
      { to: '#', label: 'Care Guide' },
      { to: '#', label: 'Size Guide' },
      { to: '#', label: 'Contact Us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '#', label: 'Sustainability' },
      { to: '#', label: 'Press' },
      { to: '#', label: 'Careers' },
    ],
  },
]

function PaymentIcon({ children, label }) {
  return (
    <div
      className="h-7 w-11 border border-taupeLight rounded-sm flex items-center justify-center bg-creamLight/50"
      aria-label={label}
    >
      <span className="text-[8px] font-medium tracking-widest2 text-espresso/70 uppercase">
        {children}
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream pt-20 md:pt-28 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top: Brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-14">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest3 uppercase font-light text-cream"
            >
              Velmora
            </Link>
            <p className="mt-5 text-sm text-cream/70 font-light leading-relaxed max-w-sm">
              Demi-fine jewelry, crafted in 18K gold plate. Designed to be lived
              in, gifted, and kept.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/70 hover:text-gold-light transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/70 hover:text-gold-light transition-colors"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-cream/70 hover:text-gold-light transition-colors"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-cream/70 hover:text-gold-light transition-colors"
              >
                <Mail size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2 xl:col-span-2">
              <h4 className="text-[11px] tracking-widest2 uppercase font-medium text-cream/90 mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/65 hover:text-gold-light transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 md:col-start-11 lg:col-start-11 xl:col-start-11">
            <h4 className="text-[11px] tracking-widest2 uppercase font-medium text-cream/90 mb-5">
              Contact
            </h4>
            <p className="text-sm text-cream/65 font-light leading-relaxed">
              hello@velmora.com
              <br />
              Mon–Fri, 9am–6pm EST
            </p>
          </div>
        </div>

        <div className="h-px bg-cream/15" />

        {/* Bottom: legal + payments */}
        <div className="pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs text-cream/55 font-light tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5">
            <PaymentIcon label="Visa">Visa</PaymentIcon>
            <PaymentIcon label="Mastercard">MC</PaymentIcon>
            <PaymentIcon label="American Express">Amex</PaymentIcon>
            <PaymentIcon label="PayPal">PayPal</PaymentIcon>
            <PaymentIcon label="Apple Pay">Pay</PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  )
}
