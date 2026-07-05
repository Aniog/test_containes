import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.22em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/75">
              Demi-fine gold jewelry designed for quiet rituals, meaningful gifts, and everyday heirloom moments.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" aria-label="Social link" className="grid h-11 w-11 place-items-center rounded-full border border-velmora-champagne/30 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-obsidian">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-ivory/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-7 text-xs uppercase tracking-[0.18em] text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'Apple Pay', 'PayPal'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-champagne/20 px-3 py-1 text-[10px] text-velmora-ivory/75">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
