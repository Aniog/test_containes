import { Gem, Instagram, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerColumns = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About', 'Journal', 'Contact', 'Gift Cards'],
}

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-50">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-5">
            <Link to="/" className="font-serif text-4xl tracking-[0.4em] text-stone-50">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-stone-300">
              Quiet-luxury demi-fine jewelry crafted for self-purchase, thoughtful gifting,
              and everyday ritual.
            </p>
            <div className="flex items-center gap-3 text-stone-300">
              <a href="https://instagram.com" className="rounded-full border border-white/10 p-2 transition hover:border-amber-200 hover:text-amber-200" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://example.com" className="rounded-full border border-white/10 p-2 transition hover:border-amber-200 hover:text-amber-200" aria-label="Collections">
                <Gem className="h-4 w-4" />
              </a>
              <a href="https://example.com" className="rounded-full border border-white/10 p-2 transition hover:border-amber-200 hover:text-amber-200" aria-label="Newsletter">
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone-400">{title}</p>
                <ul className="space-y-3 text-sm text-stone-200">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="/" className="transition hover:text-amber-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-stone-300">
                {item}
              </span>
            ))}
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
