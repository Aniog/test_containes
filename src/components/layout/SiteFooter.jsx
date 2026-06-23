import { Instagram, Pin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['New In', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQs'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
}

function SiteFooter() {
  return (
    <footer className="border-t border-stone-800/80 bg-stone-950 px-4 pb-10 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <Link className="font-display text-3xl tracking-[0.34em] text-stone-50" to="/">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-stone-300">
              Premium demi-fine jewelry designed for self-gifting, celebrations,
              and the everyday rituals in between.
            </p>
            <div className="flex items-center gap-3 text-stone-300">
              <a aria-label="Instagram" className="icon-button" href="#social-instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Pinterest" className="icon-button" href="#social-pinterest">
                <Pin className="h-4 w-4" />
              </a>
              <a aria-label="Newsletter" className="icon-button" href="#newsletter">
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, items]) => (
              <div className="space-y-4" key={title}>
                <h3 className="text-xs uppercase tracking-[0.24em] text-stone-200">
                  {title}
                </h3>
                <ul className="space-y-3 text-sm text-stone-400">
                  {items.map((item) => (
                    <li key={item}>
                      <a className="transition hover:text-stone-100" href="#footer-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-stone-800/70 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-stone-700/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-200">
              Visa
            </span>
            <span className="rounded-full border border-stone-700/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-200">
              Mastercard
            </span>
            <span className="rounded-full border border-stone-700/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-200">
              Amex
            </span>
            <span className="rounded-full border border-stone-700/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-200">
              PayPal
            </span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted with a quiet glow.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
