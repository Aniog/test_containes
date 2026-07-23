import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gift Cards'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-luxe text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry made for the rituals of everyday beauty, self-purchase, and unforgettable gifting.
            </p>
            <div className="mt-7 flex gap-3 text-velmora-ivory">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-3 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxe text-velmora-softGold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-sand">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-7 text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY', 'SHOP'].map((label) => (
              <span key={label} className="border border-velmora-ivory/20 px-3 py-1 text-[10px] font-bold tracking-widest text-velmora-ivory">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
