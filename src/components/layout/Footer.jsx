import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.22em] text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
              Demi-fine gold jewelry made for everyday rituals, unforgettable gifts, and quiet moments of shine.
            </p>
            <div className="mt-8 flex gap-3 text-xs uppercase tracking-[0.2em] text-velmora-ivory/70">
              <a href="#journal" className="transition hover:text-velmora-champagne">Instagram</a>
              <span>·</span>
              <a href="#journal" className="transition hover:text-velmora-champagne">Pinterest</a>
              <span>·</span>
              <a href="#journal" className="transition hover:text-velmora-champagne">TikTok</a>
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                  {column.links.map((link) => <li key={link}><a href="#top" className="transition hover:text-velmora-ivory">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs uppercase tracking-[0.2em] text-velmora-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex gap-2">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((pay) => <span key={pay} className="rounded-full border border-white/15 px-3 py-1 text-[10px] text-velmora-ivory/75">{pay}</span>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
