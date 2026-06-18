import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
        <div className="grid gap-12 border-b border-velmora-taupe/25 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em] text-velmora-pearl">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-taupe">
              Demi-fine jewelry designed for warm light, daily rituals, and pieces that become part of your story.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-taupe/40 p-3 text-velmora-pearl transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{heading}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-taupe">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-pearl">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-sm text-velmora-taupe md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
            {['Visa', 'Amex', 'Apple Pay', 'Shop Pay'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-taupe/30 px-3 py-1 text-velmora-pearl">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
