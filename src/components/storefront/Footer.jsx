import { Instagram, Music2, Pinterest } from 'lucide-react'

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
    links: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-velmora-line bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-20">
        <div className="space-y-6">
          <div>
            <p className="font-display text-4xl tracking-[0.28em] text-velmora-ivory">VELMORA</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-velmora-ivory/72">
              Demi-fine jewelry created to bring a warm, polished glow to everyday dressing and meaningful gifting.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-ivory/60">Accepted payments</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-velmora-ivory/80">
              <span className="rounded-full border border-white/15 px-3 py-2">Visa</span>
              <span className="rounded-full border border-white/15 px-3 py-2">Mastercard</span>
              <span className="rounded-full border border-white/15 px-3 py-2">Amex</span>
              <span className="rounded-full border border-white/15 px-3 py-2">PayPal</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-velmora-ivory">
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="rounded-full border border-white/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold">
              <Pinterest className="h-4 w-4" />
            </a>
            <a href="#" aria-label="TikTok" className="rounded-full border border-white/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-ivory/60">{group.title}</p>
              <ul className="space-y-3 text-sm text-velmora-ivory/78">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-velmora-gold">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
