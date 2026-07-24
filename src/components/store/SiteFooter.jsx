import { Gem, Instagram, Send } from 'lucide-react'
import { footerLinks } from '@/data/storeData'

const paymentBadges = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay']

const SiteFooter = () => {
  return (
    <footer className="border-t border-velmora-line bg-velmora-bg px-4 py-14 text-velmora-ivory sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <p className="font-display text-3xl tracking-[0.45em]">VELMORA</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-taupe">
            Demi-fine gold jewelry designed for gifting, self-purchase, and everyday rituals worth treasuring.
          </p>
          <div className="mt-6 flex items-center gap-3 text-velmora-taupe">
            <a
              href="https://instagram.com"
              className="rounded-full border border-velmora-line p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://pinterest.com"
              className="rounded-full border border-velmora-line p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="Pinterest"
            >
              <Gem className="h-4 w-4" />
            </a>
            <a
              href="https://tiktok.com"
              className="rounded-full border border-velmora-line p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
              aria-label="TikTok"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              {title}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-velmora-taupe">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-velmora-ivory">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-velmora-line pt-6 text-sm text-velmora-taupe sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          {paymentBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-velmora-line px-3 py-1 text-xs uppercase tracking-[0.25em] text-velmora-taupe"
            >
              {badge}
            </span>
          ))}
        </div>
        <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
