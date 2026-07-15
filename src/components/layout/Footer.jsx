import { Instagram, Facebook, CreditCard, Landmark, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About', 'Journal', 'FAQs', 'Privacy'],
}

function Footer() {
  return (
    <footer className="border-t border-velmora-line/30 bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.2fr_2fr] lg:gap-20 lg:py-20">
        <div>
          <Link to="/" className="font-display text-3xl tracking-[0.28em]">
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-cloud">
            Fine-inspired demi-fine jewelry designed for self-gifting, everyday polish, and meaningful moments.
          </p>
          <div className="mt-8 flex items-center gap-3 text-velmora-cloud">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-xs uppercase tracking-[0.32em] text-velmora-cloud">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-ivory">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-velmora-line/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-sm text-velmora-cloud md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <CreditCard className="h-5 w-5" />
            <Landmark className="h-5 w-5" />
            <Wallet className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
