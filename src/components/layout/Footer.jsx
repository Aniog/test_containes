import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Sustainability', 'Reviews'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 border-b border-velmora-cream/15 pb-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.34em] text-velmora-cream">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cream/75">
              Demi-fine gold jewelry designed for quiet rituals, memorable gifts, and everyday keepsakes.
            </p>
            <div className="mt-7 flex gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-champagne">
              <a href="#journal" className="transition hover:text-velmora-cream">Instagram</a>
              <span aria-hidden="true">·</span>
              <a href="#journal" className="transition hover:text-velmora-cream">Pinterest</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-champagne">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-cream/75">
                  {links.map((link) => (
                    <li key={link}>
                      <Link to="/shop" className="transition hover:text-velmora-cream">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-velmora-cream/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['Visa', 'Amex', 'Mastercard', 'Apple Pay'].map((method) => (
              <span key={method} className="rounded-full border border-velmora-cream/20 px-3 py-1 text-velmora-cream/75">{method}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
