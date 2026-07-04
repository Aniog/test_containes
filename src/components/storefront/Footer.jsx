import { Instagram, Facebook, Youtube } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Sizing', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Materials', 'Journal', 'Sustainability'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 border-b border-velmora-ivory/15 pb-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-serifDisplay text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">VELMORA</p>
            <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-velmora-ivory/72">
              Demi-fine gold jewelry for everyday rituals, thoughtful gifting, and the quiet statement.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-2 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 grid gap-3 font-sans text-sm text-velmora-ivory/72">
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
        <div className="flex flex-col gap-5 pt-8 font-sans text-xs uppercase tracking-[0.18em] text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-velmora-ivory/15 px-3 py-1 text-velmora-ivory/72">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
