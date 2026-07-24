import { Instagram, Linkedin, Music4 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Care Guide', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#our-story' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
]

const paymentIcons = ['Visa', 'Mastercard', 'AmEx', 'PayPal']

export default function SiteFooter() {
  return (
    <footer className="bg-velmora-ink bg-velmora-radial text-velmora-cream">
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm space-y-5">
            <Link to="/" className="inline-block font-serif text-3xl tracking-[0.45em]">
              VELMORA
            </Link>
            <p className="text-sm leading-7 text-velmora-cream/75">
              Demi-fine gold jewelry designed for daily ritual, thoughtful gifting, and a quiet kind of confidence.
            </p>
            <div className="flex items-center gap-3 text-velmora-cream/75">
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-white/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok" className="rounded-full border border-white/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Music4 className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="rounded-full border border-white/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-gold">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm text-velmora-cream/75">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-velmora-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.22em] text-velmora-cream/65 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="rounded-full border border-white/10 px-3 py-2 text-[0.65rem]"
              >
                {icon}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
