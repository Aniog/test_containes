import { Link } from 'react-router-dom'
import { CreditCard, Facebook, Instagram, Landmark, Music2, Youtube } from 'lucide-react'

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
      { label: 'Shipping & Returns', to: '/about' },
      { label: 'Jewelry Care', to: '/about' },
      { label: 'Size Guide', to: '/about' },
      { label: 'Contact Us', to: '/about' },
      { label: 'FAQ', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/about' },
      { label: 'Reviews', to: '/#reviews' },
    ],
  },
]

const SOCIALS = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
  { label: 'YouTube', icon: Youtube },
  { label: 'TikTok', icon: Music2 },
]

const PAYMENTS = [CreditCard, Landmark, CreditCard, CreditCard]

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-serif text-3xl uppercase tracking-[0.32em] text-cream">
              Velmora
            </Link>
            <p className="mt-5 max-w-sm font-serif text-lg italic leading-relaxed text-cream/70">
              Demi-fine jewelry crafted to be treasured — 18k gold, made for every day
              and everyone you love.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/80 transition-all duration-300 hover:border-gold-soft hover:text-gold-soft"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-cream/50">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {PAYMENTS.map((Icon, i) => (
              <span
                key={i}
                className="flex h-8 w-12 items-center justify-center border border-cream/15 text-cream/60"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6 text-xs text-cream/50">
            <a href="#" className="transition-colors hover:text-cream">Privacy</a>
            <a href="#" className="transition-colors hover:text-cream">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
