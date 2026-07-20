import { Instagram, Music2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { shopLinks, trustBadges } from '@/data/storefront'

const footerGroups = {
  Shop: shopLinks,
  Help: ['Shipping', 'Returns', 'Care Guide'],
  Company: ['About', 'Journal', 'Contact'],
}

const socialLinks = [
  { label: 'Instagram', icon: Instagram },
  { label: 'Velmora Journal', icon: Sparkles },
  { label: 'TikTok', icon: Music2 },
]

const Footer = () => (
  <footer className="bg-velmora-ink px-4 pb-10 pt-16 text-velmora-cream sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl space-y-12">
      <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr,1fr] lg:items-start">
        <div className="space-y-5">
          <Link to="/" className="font-display text-4xl tracking-[0.35em] text-velmora-cream">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-cream/72">
            Quiet luxury jewelry designed for gifting, collecting, and the rituals of getting dressed well.
          </p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map((payment) => (
              <span
                key={payment}
                className="rounded-full border border-white/15 px-3 py-2 text-[11px] font-medium uppercase tracking-eyebrow text-velmora-cream/76"
              >
                {payment}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerGroups).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-eyebrow text-velmora-gold">{title}</p>
              <div className="space-y-3 text-sm text-velmora-cream/72">
                {links.map((link) => (
                  <Link key={link} to={title === 'Shop' ? '/shop' : '/'} className="block transition duration-300 hover:text-velmora-cream">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-eyebrow text-velmora-cream/60">
          {trustBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href="/"
                className="rounded-full border border-white/12 p-3 text-velmora-cream/70 transition duration-300 hover:border-velmora-gold hover:text-velmora-gold"
                aria-label={social.label}
                onClick={(event) => event.preventDefault()}
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
