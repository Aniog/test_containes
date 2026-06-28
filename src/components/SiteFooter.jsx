import { Facebook, Instagram, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Privacy'],
}

function SiteFooter() {
  return (
    <footer className="border-t border-sand bg-cocoa px-4 py-14 text-ivory sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[1.1fr,1fr]">
        <div className="space-y-5">
          <Link className="inline-block font-serif text-2xl tracking-[0.48em]" to="/">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-ivory/72">
            Quietly luminous demi-fine jewelry designed for gifting, collecting,
            and wearing every day.
          </p>
          <div className="flex items-center gap-3 text-ivory/80">
            <a className="rounded-full border border-ivory/15 p-3 transition hover:border-gold hover:text-gold" href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a className="rounded-full border border-ivory/15 p-3 transition hover:border-gold hover:text-gold" href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a className="rounded-full border border-ivory/15 p-3 transition hover:border-gold hover:text-gold" href="#" aria-label="Pinterest">
              <Pin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.34em] text-ivory/60">
                {title}
              </h3>
              <ul className="space-y-3 text-sm text-ivory/75">
                {links.map((link) => (
                  <li key={link}>
                    <a className="transition hover:text-gold" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1360px] flex-col gap-4 border-t border-ivory/10 pt-6 text-xs uppercase tracking-[0.28em] text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
        <p>Visa · Mastercard · Amex · Apple Pay</p>
        <p>© 2026 Velmora Fine Jewelry</p>
      </div>
    </footer>
  )
}

export default SiteFooter
