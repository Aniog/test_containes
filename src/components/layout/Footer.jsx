import { Instagram, Music2, Twitter } from 'lucide-react'

const footerGroups = [
  {
    title: 'Shop',
    links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About Velmora', 'Journal', 'Wholesale', 'Stockists'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-ink/10 bg-velmora-ink text-velmora-parchment">
      <div className="section-shell py-14 md:py-16">
        <div className="section-frame grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            <p className="font-display text-3xl tracking-[0.35em] text-velmora-parchment">
              VELMORA
            </p>
            <p className="max-w-md text-sm leading-7 text-velmora-parchment/75">
              Quietly luminous demi-fine jewelry for gifting, collecting, and the beauty of everyday rituals.
            </p>
            <div className="flex items-center gap-3 text-velmora-parchment/75">
              <Instagram className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Music2 className="h-4 w-4" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-xs uppercase tracking-luxe text-velmora-champagne">
                  {group.title}
                </p>
                <ul className="space-y-3 text-sm text-velmora-parchment/75">
                  {group.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-velmora-parchment/10 pt-6 text-xs uppercase tracking-[0.2em] text-velmora-parchment/55 md:flex-row md:items-center md:justify-between">
          <p>Visa · Mastercard · Amex · PayPal</p>
          <p>© 2026 Velmora Fine Jewelry</p>
        </div>
      </div>
    </footer>
  )
}
