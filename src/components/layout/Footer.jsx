import { Instagram, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'New In', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=Earrings' },
      { label: 'Necklaces', to: '/shop?category=Necklaces' },
      { label: 'Huggies', to: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping', to: '/shop' },
      { label: 'Returns', to: '/shop' },
      { label: 'Care Guide', to: '/shop' },
      { label: 'Contact', to: '/shop' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/#about' },
      { label: 'Journal', to: '/#journal' },
      { label: 'Gift Edit', to: '/shop' },
      { label: 'Terms', to: '/shop' },
    ],
  },
]

function Footer() {
  return (
    <footer className="mt-20 border-t border-velmora-sand/30 bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Link className="font-serif text-4xl tracking-[0.28em] text-velmora-ivory" to="/">
              VELMORA
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-velmora-mist">
              Demi-fine gold jewelry designed for modern rituals, meaningful gifting, and everyday wear with a quietly luxurious finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-velmora-sand">
              <span className="rounded-full border border-velmora-sand/25 px-3 py-2">Visa</span>
              <span className="rounded-full border border-velmora-sand/25 px-3 py-2">Mastercard</span>
              <span className="rounded-full border border-velmora-sand/25 px-3 py-2">Amex</span>
              <span className="rounded-full border border-velmora-sand/25 px-3 py-2">Apple Pay</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-luxe text-velmora-sand">
                  {column.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      className="block text-sm text-velmora-mist transition hover:text-velmora-ivory"
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-sand/20 pt-6 text-sm text-velmora-mist md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-velmora-sand/25 px-3 py-2 transition hover:text-velmora-ivory"
              href="#social"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.18em]">Instagram</span>
            </a>
            <a
              aria-label="Pinterest"
              className="inline-flex items-center rounded-full border border-velmora-sand/25 px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition hover:text-velmora-ivory"
              href="#social"
            >
              Pinterest
            </a>
            <a
              aria-label="TikTok"
              className="inline-flex items-center gap-2 rounded-full border border-velmora-sand/25 px-3 py-2 transition hover:text-velmora-ivory"
              href="#social"
            >
              <Music2 className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.18em]">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
