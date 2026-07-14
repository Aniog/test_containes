import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const footerGroups = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

const Footer = () => (
  <footer className="bg-velmora-ink text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Link to="/" className="font-serif text-4xl font-semibold tracking-widerLuxury text-velmora-ivory">VELMORA</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
            Demi-fine gold jewelry crafted for modern keepsakes, everyday rituals, and meaningful gifts.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center border border-velmora-ivory/20 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-9 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-champagne">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-velmora-champagne">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/12 pt-8 text-xs text-velmora-ivory/58 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex items-center gap-2 text-velmora-ivory/72">
          {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
            <span key={item} className="border border-velmora-ivory/18 px-2 py-1 text-[0.62rem] font-bold tracking-widest">{item}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
