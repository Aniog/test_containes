import { Facebook, Instagram, Twitter } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-[0.22em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/75">Demi-fine gold jewelry crafted for everyday glow, thoughtful gifting, and heirloom-inspired rituals.</p>
            <div className="mt-7 flex gap-3 text-velmora-cream">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#journal" className="rounded-full border border-velmora-cream/25 p-2 transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-cream/78 transition hover:text-velmora-champagne">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-cream/15 pt-7 text-xs text-velmora-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((label) => (
              <span key={label} className="border border-velmora-cream/20 px-2 py-1 text-[10px] tracking-[0.18em] text-velmora-cream/80">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
