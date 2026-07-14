import { Instagram, Linkedin, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'New Arrivals', to: '/shop' },
    { label: 'Bestsellers', to: '/collections' },
    { label: 'Gift Sets', to: '/shop?category=Sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/about' },
    { label: 'Care Guide', to: '/about' },
    { label: 'Contact', to: '/journal' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Collections', to: '/collections' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-stone-950 text-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-5">
            <Link to="/" className="font-serif text-3xl tracking-[0.45em]">
              VELMORA
            </Link>
            <p className="max-w-sm text-sm leading-7 text-stone-300">
              Quiet luxury in demi-fine form — elevated gold jewelry designed to
              be worn, gifted, and treasured every day.
            </p>
            <div className="flex items-center gap-3 text-stone-300">
              <a
                href="https://instagram.com"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/5"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/5"
                aria-label="TikTok"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                className="rounded-full border border-white/10 p-2 transition hover:bg-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.3em] text-amber-200">
                {group}
              </h3>
              <ul className="space-y-3 text-sm text-stone-300">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-stone-50">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-stone-400">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-white/10 px-3 py-2"
              >
                {payment}
              </span>
            ))}
          </div>
          <p className="text-sm text-stone-400">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
