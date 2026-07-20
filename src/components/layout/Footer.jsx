import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.2em] text-velmora-ivory">VELMORA</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/70">
              Demi-fine gold jewelry crafted for rituals of self-purchase, gifting, and everyday radiance.
            </p>
            <div className="mt-7 flex gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-champagne">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-velmora-ivory">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-velmora-ivory">Pinterest</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-champagne">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/70">
                  {links.map((link) => (
                    <li key={link}>
                      <Link to={title === 'Shop' ? '/shop' : '/'} className="transition-colors hover:text-velmora-ivory">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-sm text-velmora-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((payment) => (
              <span key={payment} className="border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-velmora-ivory/70">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
