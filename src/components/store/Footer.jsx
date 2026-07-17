import { Link } from 'react-router-dom'
import { footerGroups } from '@/data/products'

const socialLinks = ['Instagram', 'Pinterest', 'TikTok']
const payments = ['Visa', 'Mastercard', 'AmEx', 'PayPal']

export default function Footer() {
  return (
    <footer className="border-t border-mocha/10 bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:px-10">
        <div className="max-w-sm">
          <Link to="/" className="font-display text-4xl tracking-[0.3em] text-ivory">
            VELMORA
          </Link>
          <p className="mt-5 text-sm leading-7 text-ivory/70">
            Demi-fine gold jewelry designed for daily rituals, lasting gifting moments, and the glow of understated confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {payments.map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-ivory/15 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-ivory/70"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>

        {Object.entries(footerGroups).map(([group, links]) => (
          <div key={group}>
            <h3 className="text-xs uppercase tracking-[0.32em] text-ivory/60">{group}</h3>
            <ul className="mt-5 space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-ivory/80 transition hover:text-gold">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs uppercase tracking-[0.24em] text-ivory/55 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social} href="#" className="transition hover:text-gold">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
