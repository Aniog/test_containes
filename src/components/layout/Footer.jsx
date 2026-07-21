import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-serifDisplay text-4xl font-semibold tracking-[0.18em]">VELMORA</p>
            <p className="mt-5 max-w-sm font-sansBody text-sm leading-7 text-velmora-cream/70">
              Demi-fine gold jewelry designed for everyday ceremony, self-gifting, and meaningful moments.
            </p>
            <div className="mt-8 flex gap-3" aria-label="Social links">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-cream/15 p-3 text-velmora-cream transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social profile">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 font-sansBody text-sm text-velmora-cream/75">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-velmora-cream/10 pt-8 font-sansBody text-xs uppercase tracking-nav text-velmora-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payments">
            {['Visa', 'Amex', 'Apple Pay', 'PayPal'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-cream/15 px-3 py-1 text-velmora-cream/75">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
