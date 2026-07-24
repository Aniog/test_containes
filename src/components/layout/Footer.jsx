import { Link } from 'react-router-dom'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Sizing', 'Care Guide'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Contact'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-[0.2em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
              Demi-fine gold jewelry designed for meaningful everyday rituals, gifting, and quiet self-celebration.
            </p>
            <div className="mt-8 flex gap-3 text-xs uppercase tracking-cta text-velmora-linen">
              <a href="#" className="transition hover:text-velmora-champagne">Instagram</a>
              <a href="#" className="transition hover:text-velmora-champagne">Pinterest</a>
              <a href="#" className="transition hover:text-velmora-champagne">TikTok</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-cta text-velmora-champagne">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-linen">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to={link === 'Bestsellers' ? '/#bestsellers' : '/shop'} className="transition hover:text-velmora-ivory">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-7 text-xs text-velmora-linen sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Payment methods">
            {['Visa', 'Mastercard', 'Amex', 'Apple Pay'].map((method) => (
              <span key={method} className="border border-velmora-ivory/20 px-3 py-1 text-velmora-linen">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
