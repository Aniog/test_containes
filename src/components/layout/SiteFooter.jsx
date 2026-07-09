import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: [
    { label: 'New Arrivals', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=Earrings' },
    { label: 'Necklaces', to: '/shop?category=Necklaces' },
    { label: 'Gift Sets', to: '/product/royal-heirloom-set' },
  ],
  Help: [
    { label: 'Shipping', to: '/about' },
    { label: 'Returns', to: '/about' },
    { label: 'Care Guide', to: '/about' },
    { label: 'Contact', to: '/about' },
  ],
  Company: [
    { label: 'About Velmora', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Stockists', to: '/about' },
    { label: 'Privacy', to: '/about' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Email', href: 'mailto:hello@velmora.com', icon: Mail },
  { label: 'TikTok', href: 'https://tiktok.com', icon: Music2 },
]

const SiteFooter = () => (
  <footer className="border-t border-velmora-line bg-velmora-noir text-velmora-ivory">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-8">
      <div>
        <Link to="/" className="font-display text-3xl tracking-[0.28em]">
          VELMORA
        </Link>
        <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">
          Demi-fine jewelry designed for the rituals you repeat and the moments you keep.
        </p>
        <div className="mt-6 flex items-center gap-3 text-velmora-gold">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-full border border-white/15 p-2 transition hover:border-velmora-gold"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {Object.entries(footerColumns).map(([heading, links]) => (
        <div key={heading}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">
            {heading}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
            {links.map((link) => (
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

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs uppercase tracking-[0.26em] text-velmora-ivory/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap gap-2 text-[10px] text-velmora-noir">
          {['Visa', 'Mastercard', 'AmEx', 'PayPal'].map((label) => (
            <span key={label} className="rounded-full bg-velmora-gold px-3 py-1 font-semibold tracking-[0.18em]">
              {label}
            </span>
          ))}
        </div>
        <p>© 2026 Velmora Fine Jewelry</p>
      </div>
    </div>
  </footer>
)

export default SiteFooter
