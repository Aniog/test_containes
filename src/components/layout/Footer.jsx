import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Shop',
    links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  },
  {
    title: 'Company',
    links: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-bone">
              Demi-fine gold jewelry designed for daily rituals, quiet celebrations, and pieces you keep close.
            </p>
            <div className="mt-7 flex flex-wrap gap-2" aria-label="Payment methods">
              {['VISA', 'MC', 'AMEX', 'APPLE PAY'].map((payment) => (
                <span key={payment} className="border border-velmora-ivory/20 px-3 py-2 text-[0.62rem] font-bold tracking-[0.18em] text-velmora-bone">
                  {payment}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-bone">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-champagne">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-bone sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. Crafted for the everyday heirloom.</p>
          <div className="flex gap-5 font-bold uppercase tracking-[0.2em]">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-velmora-champagne">
              Instagram
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noreferrer" className="hover:text-velmora-champagne">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
