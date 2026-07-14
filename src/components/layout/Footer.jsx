import { CircleDot, Instagram, MoveRight, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = [
  { title: 'Shop', links: ['New Arrivals', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Gift Cards', 'Care Guide'] },
  { title: 'Company', links: ['About', 'Journal', 'Contact', 'Stockists'] },
]

const Footer = () => {
  return (
    <footer className="border-t border-mist bg-obsidian text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr] lg:px-12 xl:px-16">
        <div>
          <Link to="/" className="font-serif text-4xl tracking-[0.3em] text-ivory">
            VELMORA
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-ivory/70">
            Demi-fine jewelry designed for gifting, collecting, and wearing on repeat. Quietly luxurious pieces with warm finishes and timeless ease.
          </p>
          <div className="mt-8 flex items-center gap-4 text-ivory/80">
            <Instagram className="h-5 w-5" />
            <CircleDot className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-brand text-champagne">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-ivory/72">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-champagne">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-ivory/65 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-brand text-ivory/80">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <span key={payment} className="rounded-full border border-ivory/10 px-3 py-2">
                {payment}
              </span>
            ))}
          </div>
          <Link to="/shop" className="inline-flex items-center gap-2 text-champagne">
            Explore the collection <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
