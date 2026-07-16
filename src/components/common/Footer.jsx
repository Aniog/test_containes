import { Instagram, Facebook, PinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: ['Bestsellers', 'New Arrivals', 'Gift Sets', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Stockists', 'Careers'],
}

const Footer = () => {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-4">
            <Link to="/" className="font-serif text-3xl tracking-[0.28em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="max-w-md text-sm leading-7 text-velmora-mist">
              Demi-fine jewelry designed for self-purchase, thoughtful gifting, and the small rituals that feel like luxury.
            </p>
            <div className="flex items-center gap-3 text-velmora-mist">
              <Instagram className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
              <PinIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(columns).map(([title, items]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-gold">{title}</h3>
                <ul className="space-y-3 text-sm text-velmora-mist">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition-colors duration-300 hover:text-velmora-ivory">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-velmora-mist md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <span key={method} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-velmora-mist">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
