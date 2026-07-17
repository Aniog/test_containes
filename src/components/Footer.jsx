import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const SHOP_LINKS = [
  { label: 'All Jewelry', to: '/shop' },
  { label: 'Earrings', to: '/shop?category=Earrings' },
  { label: 'Necklaces', to: '/shop?category=Necklaces' },
  { label: 'Huggies', to: '/shop?category=Huggies' },
  { label: 'Gift Sets', to: '/shop?category=Sets' },
]

const HELP_LINKS = ['Shipping & Returns', 'Care Guide', 'Size Guide', 'Contact Us', 'FAQ']
const COMPANY_LINKS = [
  { label: 'Our Story', to: '/about' },
  { label: 'Journal', to: '/journal' },
  { label: 'Collections', to: '/collections' },
  { label: 'Sustainability', to: '/about' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-[0.35em] text-cream">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-warm/75">
              Demi-fine jewelry in 18K gold, designed in small batches for everyday rituals and
              once-in-a-lifetime moments alike.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Instagram', 'Facebook', 'YouTube'][i]}
                  className="flex h-10 w-10 items-center justify-center border border-line-dark text-stone-warm transition-colors hover:border-gold hover:text-gold-soft"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Shop">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-soft">Shop</p>
            <ul className="mt-5 space-y-3">
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-stone-warm/85 transition-colors hover:text-gold-soft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-2" aria-label="Help">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-soft">Help</p>
            <ul className="mt-5 space-y-3">
              {HELP_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-stone-warm/85 transition-colors hover:text-gold-soft">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Company">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-soft">Company</p>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-stone-warm/85 transition-colors hover:text-gold-soft">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line-dark pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-stone-warm/60">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span
                key={p}
                className="border border-line-dark px-2.5 py-1 text-[9px] font-semibold tracking-[0.12em] text-stone-warm/80"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
