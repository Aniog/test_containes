import { Instagram, Facebook, Youtube } from 'lucide-react'
import { footerColumns } from '@/lib/products'

const paymentLabels = ['Visa', 'Mastercard', 'Amex', 'PayPal']

export default function SiteFooter() {
  return (
    <footer className="border-t border-velmora-sand/40 bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-4">
          <div className="font-heading text-2xl tracking-[0.35em] text-velmora-ivory">VELMORA</div>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Quiet luxury in demi-fine form. Thoughtfully crafted gold jewelry for self-gifting, milestone moments, and every day.
          </p>
          <div className="flex items-center gap-3 pt-2 text-velmora-ivory/70">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Youtube className="h-4 w-4" />
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.28em] text-velmora-gold">{title}</h3>
            <ul className="space-y-3 text-sm text-velmora-ivory/70">
              {links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-velmora-ivory/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>© 2026 Velmora Fine Jewelry. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-2">
            {paymentLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-velmora-ivory/70"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
