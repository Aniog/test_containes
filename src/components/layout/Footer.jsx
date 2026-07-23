import { Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-onyx text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-18">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine jewelry in warm gold tones, designed direct-to-you for gifting, collecting, and everyday ritual.
            </p>
            <div className="mt-6 flex gap-3 text-velmora-ivory">
              {[Instagram, Mail, Music2].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-white/20 p-2 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs uppercase tracking-[0.2em] text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'Apple Pay', 'Shop Pay'].map((item) => (
              <span key={item} className="border border-white/15 px-3 py-1 text-velmora-ivory">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
