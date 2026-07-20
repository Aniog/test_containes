import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About', 'Journal', 'Sustainability', 'Stores'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.22em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry for everyday rituals, gifting moments, and pieces that feel quietly treasured.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  className="rounded-full border border-velmora-sand/40 p-3 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-ivory">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-sand/20 pt-8 text-xs uppercase tracking-ui text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-sand/30 px-2.5 py-1 text-[10px] text-velmora-ivory">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
