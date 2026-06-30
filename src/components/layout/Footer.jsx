import { Link } from 'react-router-dom'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_2fr] lg:px-10 lg:py-20">
        <div className="space-y-6">
          <Link to="/" className="font-serifDisplay text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">
            VELMORA
          </Link>
          <p className="max-w-sm text-sm leading-7 text-velmora-ivory/70">
            Demi-fine gold jewelry designed for modern rituals, meaningful gifting, and everyday radiance.
          </p>
          <div className="flex gap-3 text-xs uppercase tracking-[0.22em] text-velmora-ivory/80">
            <span>Instagram</span>
            <span aria-hidden="true">·</span>
            <span>Pinterest</span>
            <span aria-hidden="true">·</span>
            <span>TikTok</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">{column.title}</h3>
              <ul className="space-y-3 text-sm text-velmora-ivory/72">
                {column.links.map((item) => (
                  <li key={item}>
                    <Link to={item === 'Bestsellers' ? '/shop' : '#'} className="transition hover:text-velmora-champagne">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-ivory/10 px-5 py-6 text-velmora-ivory/60 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['Visa', 'MC', 'Amex', 'Pay'].map((item) => (
              <span key={item} className="border border-velmora-ivory/20 px-2 py-1 text-[10px] text-velmora-ivory/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
