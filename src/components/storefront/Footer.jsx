import { Link } from 'react-router-dom'
import { Gem, Instagram, Music2 } from 'lucide-react'

const footerGroups = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
      { label: 'Gift Sets', to: '/shop?category=Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/#assurance' },
      { label: 'Returns', to: '/#assurance' },
      { label: 'Care Guide', to: '/product/vivid-aura-jewels' },
      { label: 'Contact', to: '/#newsletter' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Velmora', to: '/#about' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Stockists', to: '/#about' },
      { label: 'Privacy', to: '/#newsletter' },
    ],
  },
]

const socialLinks = [
  { label: 'Instagram', to: '/#journal', icon: Instagram },
  { label: 'Collections', to: '/#collections', icon: Gem },
  { label: 'TikTok', to: '/#journal', icon: Music2 },
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
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  aria-label={item.label}
                  className="rounded-full border border-white/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-ivory/60">{group.title}</p>
              <ul className="space-y-3 text-sm text-velmora-ivory/78">
                {group.links.map((link) => (
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
      </div>
    </footer>
  )
}
