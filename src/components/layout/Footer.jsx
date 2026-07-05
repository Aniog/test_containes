import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop?category=earrings', label: 'Earrings' },
      { to: '/shop?category=necklaces', label: 'Necklaces' },
      { to: '/shop?category=huggies', label: 'Huggies' },
      { to: '/shop?category=sets', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/help/shipping', label: 'Shipping' },
      { to: '/help/returns', label: 'Returns' },
      { to: '/help/care', label: 'Materials & Care' },
      { to: '/help/size', label: 'Size Guide' },
      { to: '/help/contact', label: 'Contact' },
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
]

function PaymentIcon({ label }) {
  return (
    <div className="h-7 px-2.5 flex items-center justify-center border border-white/15 rounded-sm">
      <span className="text-[10px] uppercase tracking-widest2 text-ivory/80 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-noir text-ivory/85">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.32em] uppercase text-ivory"
            >
              Velmora
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70 font-light">
              Demi-fine gold jewelry, hand-finished and made to be worn every
              day. Crafted to be treasured.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.4} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-gold transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-widest2 font-medium text-ivory">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-ivory/70 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest2 font-medium text-ivory">
              Visit
            </h4>
            <p className="mt-6 text-sm text-ivory/70 leading-relaxed">
              24 Rue Cler<br />
              75007 Paris<br />
              France
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="Mastercard" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="Apple Pay" />
            <PaymentIcon label="PayPal" />
          </div>
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry
          </p>
        </div>
      </div>
    </footer>
  )
}
