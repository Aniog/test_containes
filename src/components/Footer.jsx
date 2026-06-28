import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gifting'] },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-cocoa)] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-[var(--font-heading)] text-3xl tracking-[0.2em] text-[var(--color-ivory)]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(251,246,238,0.72)]">
              Demi-fine gold jewelry designed in small, polished silhouettes for everyday rituals and unforgettable gifts.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-espresso)]">
              {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((item) => (
                <span key={item} className="rounded-full bg-[var(--color-ivory)] px-3 py-2">{item}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--color-gold)]">{column.title}</h3>
                <ul className="mt-5 grid gap-3 text-sm text-[rgba(251,246,238,0.78)]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to={link === 'Earrings' || link === 'Necklaces' || link === 'Huggies' ? `/shop?category=${link.toLowerCase()}` : '/shop'} className="transition-colors duration-300 hover:text-[var(--color-gold)]">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-[rgba(251,246,238,0.62)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--color-gold)]">Instagram</a>
            <a href="#" className="hover:text-[var(--color-gold)]">Pinterest</a>
            <a href="#" className="hover:text-[var(--color-gold)]">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
