import { Instagram, PinIcon, Send } from 'lucide-react'
import { footerColumns, paymentBadges } from '@/lib/store-data'

const iconMap = {
  Instagram,
  Pinterest: PinIcon,
  TikTok: Send,
}

export default function SiteFooter() {
  return (
    <footer className="bg-velmora-ink text-velmora-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 border-b border-velmora-paper/15 pb-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="max-w-sm space-y-4">
            <p className="font-serif text-4xl tracking-[0.35em]">VELMORA</p>
            <p className="text-sm leading-7 text-velmora-paper/75">
              Demi-fine gold jewelry designed for self-gifting, milestone moments, and every day in between.
            </p>
            <div className="flex flex-wrap gap-2 pt-3">
              {paymentBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-velmora-paper/15 px-3 py-1 text-[11px] uppercase tracking-editorial text-velmora-paper/85"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <p className="text-xs uppercase tracking-editorial text-velmora-paper/55">{title}</p>
              <ul className="space-y-3 text-sm text-velmora-paper/80">
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-velmora-paper/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Thoughtfully made to be treasured.</p>
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map((label) => {
              const Icon = iconMap[label]
              return (
                <a key={label} href="#" className="flex items-center gap-2 transition hover:text-velmora-accent">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
