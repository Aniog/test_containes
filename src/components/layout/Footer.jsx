import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

const Footer = () => {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-cream">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/70">
              Demi-fine gold jewelry designed for self-gifting, milestone moments, and the quiet rituals in between.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-champagne">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-cream/72">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-velmora-champagne">Follow</h3>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-cream/20 p-2 text-velmora-cream transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['VISA', 'MC', 'AMEX', 'PAY'].map((pay) => (
                <span key={pay} className="border border-velmora-cream/20 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-velmora-cream/80">
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-velmora-cream/12 pt-6 text-xs uppercase tracking-[0.22em] text-velmora-cream/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <p>18K gold plated · Hypoallergenic · Direct to you</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
