import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.24em] text-velmora-pearl">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl/75">Demi-fine gold jewelry designed for everyday rituals, meaningful gifting, and quiet celebration.</p>
            <div className="mt-6 flex gap-3 text-xs font-bold uppercase tracking-label text-velmora-gold">
              <span>Instagram</span><span>Pinterest</span><span>TikTok</span>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-label text-velmora-gold">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-pearl/78">
                  {column.links.map((link) => <li key={link}><a href="#" className="hover:text-velmora-gold">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-velmora-pearl/15 pt-6 text-xs text-velmora-pearl/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Payment methods">
            {['Visa', 'MC', 'Amex', 'Pay'].map((item) => <span key={item} className="rounded border border-velmora-pearl/25 px-2 py-1 text-velmora-pearl/80">{item}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
