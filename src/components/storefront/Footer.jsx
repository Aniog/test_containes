import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-gold/30 pb-10 lg:grid-cols-footer">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-brand text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-linen">
              Demi-fine gold jewelry designed for rituals, milestones, and the everyday glow in between.
            </p>
            <div className="mt-6 flex gap-3 text-velmora-cream">
              <a aria-label="Instagram" className="rounded-full border border-velmora-gold/40 p-2 transition-colors hover:bg-velmora-gold hover:text-velmora-ink" href="#journal"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Email" className="rounded-full border border-velmora-gold/40 p-2 transition-colors hover:bg-velmora-gold hover:text-velmora-ink" href="mailto:hello@velmora.example"><Mail className="h-4 w-4" /></a>
              <a aria-label="Social video" className="rounded-full border border-velmora-gold/40 p-2 transition-colors hover:bg-velmora-gold hover:text-velmora-ink" href="#reels"><Music2 className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-gold">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-sm text-velmora-linen">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a className="transition-colors hover:text-velmora-gold" href="#shop">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 font-sans text-xs uppercase tracking-brand text-velmora-linen md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'Apple Pay', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-gold/30 px-3 py-1 text-velmora-cream">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
