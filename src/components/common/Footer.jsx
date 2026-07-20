import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-ivory">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">
            VELMORA
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-velmora-stone">
            Demi-fine gold jewelry designed for daily rituals, thoughtful gifting, and the softly luminous moments between.
          </p>
          <div className="mt-8 flex gap-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ivory">
            <a href="#journal" className="transition hover:text-velmora-gold">Instagram</a>
            <span className="text-velmora-gold">·</span>
            <a href="#journal" className="transition hover:text-velmora-gold">Pinterest</a>
            <span className="text-velmora-gold">·</span>
            <a href="#journal" className="transition hover:text-velmora-gold">TikTok</a>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-stone">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to="/shop" className="transition hover:text-velmora-ivory">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-5 border-t border-velmora-gold/25 pt-8 text-xs text-velmora-stone md:flex-row md:items-center md:justify-between">
        <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        <div className="flex flex-wrap gap-2" aria-label="Payment methods">
          {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((payment) => (
            <span key={payment} className="rounded-full border border-velmora-gold/30 px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-velmora-ivory">
              {payment}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
