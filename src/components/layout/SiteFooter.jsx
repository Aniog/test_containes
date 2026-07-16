import { Instagram, Music2 } from 'lucide-react'
import { footerColumns } from '@/data/store.js'

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal']
const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'TikTok', icon: Music2 },
]

function SiteFooter() {
  return (
    <footer className="border-t border-velmora-ink/10 bg-velmora-ink text-velmora-pearl">
      <div className="velmora-container grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-sm">
          <p className="font-display text-4xl tracking-[0.28em] text-velmora-pearl">VELMORA</p>
          <p className="mt-5 text-sm leading-7 text-velmora-pearl/78">
            Elevated demi-fine jewelry designed for daily wear, modern gifting, and quietly luxurious rituals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-velmora-pearl/80">
            {paymentMethods.map((method) => (
              <span key={method} className="rounded-full border border-velmora-pearl/15 px-4 py-2">
                {method}
              </span>
            ))}
          </div>
        </div>

        {Object.entries(footerColumns).map(([title, items]) => (
          <div key={title}>
            <h3 className="text-sm uppercase tracking-[0.24em] text-velmora-pearl">{title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-velmora-pearl/72">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="velmora-container flex flex-col gap-5 border-t border-velmora-pearl/10 py-6 text-sm text-velmora-pearl/70 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry. Crafted with a modern heirloom spirit.</p>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, icon: Icon }) => (
            <a key={label} href="#" className="inline-flex items-center gap-2 transition hover:text-velmora-gold">
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
