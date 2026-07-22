import { Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQs'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Stockists'],
}

const payments = ['Visa', 'Mastercard', 'Amex', 'Apple Pay']

const Footer = () => {
  return (
    <footer className="border-t border-velmora-mist/20 bg-velmora-ink text-velmora-parchment">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm space-y-5">
            <Link
              to="/"
              className="font-display text-4xl uppercase tracking-[0.35em] text-velmora-parchment"
            >
              Velmora
            </Link>
            <p className="text-sm leading-7 text-velmora-champagne">
              Demi-fine jewelry designed to feel intimate, luminous, and lasting.
              Thoughtfully priced for self-purchase and gifting.
            </p>
            <div className="flex items-center gap-3 text-velmora-parchment">
              <a
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-champagne/30 transition hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://pinterest.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-champagne/30 text-xs font-medium uppercase tracking-[0.22em] transition hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="Pinterest"
              >
                Pi
              </a>
              <a
                href="https://tiktok.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-velmora-champagne/30 transition hover:border-velmora-champagne hover:text-velmora-champagne"
                aria-label="TikTok"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.32em] text-velmora-champagne">
                  {title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-parchment/85">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-velmora-champagne/15 pt-6 text-sm text-velmora-champagne md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {payments.map((item) => (
              <span
                key={item}
                className="rounded-full border border-velmora-champagne/20 px-4 py-2 text-xs uppercase tracking-[0.22em]"
              >
                {item}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
