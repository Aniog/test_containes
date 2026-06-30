import { Instagram, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-[0.45em] text-velmora-ivory">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-velmora-ivory/70">
            Quietly luxurious demi-fine jewelry for gifting, milestones, and the
            pieces you reach for every day.
          </p>
          <div className="flex items-center gap-3 text-velmora-ivory/80">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-white/10 p-3 transition hover:border-white/30 hover:text-white">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-white/10 p-3 transition hover:border-white/30 hover:text-white">
              <Facebook size={16} />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="rounded-full border border-white/10 px-3 py-2.5 text-[10px] font-medium uppercase tracking-[0.28em] transition hover:border-white/30 hover:text-white">
              Pin
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
                {title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/72">
                {links.map((link) => (
                  <li key={link}>
                    <a href="/" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs uppercase tracking-[0.2em] text-velmora-ivory/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1">Visa</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Mastercard</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Amex</span>
            <span className="rounded-full border border-white/10 px-3 py-1">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
