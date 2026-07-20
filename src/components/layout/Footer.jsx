import { Instagram, Music2, Youtube } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['About Velmora', 'Journal', 'Sustainability', 'Wholesale'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-velmora-champagne bg-velmora-onyx text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_2fr] md:px-8">
        <div className="space-y-5">
          <h2 className="font-serif text-4xl tracking-[0.2em]">VELMORA</h2>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/75">Demi-fine jewelry designed for the soft light of everyday rituals, gifting moments, and lasting personal style.</p>
          <div className="flex gap-3 text-velmora-champagne"><Instagram className="h-5 w-5" /><Youtube className="h-5 w-5" /><Music2 className="h-5 w-5" /></div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
              <ul className="space-y-3 text-sm text-velmora-ivory/75">
                {column.links.map((link) => <li key={link}><a className="transition hover:text-velmora-champagne" href="/#">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs uppercase tracking-[0.2em] text-velmora-ivory/60 md:px-8">
        Visa · Mastercard · Amex · Apple Pay · PayPal · © 2026 Velmora Fine Jewelry
      </div>
    </footer>
  )
}
