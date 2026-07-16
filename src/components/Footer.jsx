import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.22em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
              Demi-fine gold jewelry designed for warm light, daily rituals, and treasured gifting.
            </p>
            <div className="mt-8 flex gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-champagne">
              <a href="#" className="transition-colors hover:text-velmora-ivory">Instagram</a>
              <span aria-hidden="true">/</span>
              <a href="#" className="transition-colors hover:text-velmora-ivory">Pinterest</a>
              <span aria-hidden="true">/</span>
              <a href="#" className="transition-colors hover:text-velmora-ivory">TikTok</a>
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/70">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-velmora-ivory">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-8 text-xs text-velmora-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-ivory/20 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-velmora-ivory/80">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
