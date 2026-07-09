import { Instagram, Music2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso px-4 py-14 text-velmora-cream sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-velmora-cream/15 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-stone">
              Demi-fine gold jewelry designed in small, luminous details for gifting, keeping, and everyday rituals.
            </p>
            <div className="mt-6 flex items-center gap-3 text-velmora-stone">
              <Instagram className="h-5 w-5" />
              <Music2 className="h-5 w-5" />
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">
                  {column.title}
                </h3>
                <ul className="mt-5 grid gap-3 text-sm text-velmora-stone">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-cream">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-[0.22em] text-velmora-stone md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((item) => (
              <span key={item} className="border border-velmora-cream/20 px-3 py-1 text-velmora-cream">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
