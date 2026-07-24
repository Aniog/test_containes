import { Facebook, Instagram, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerGroups = {
  Shop: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  Company: ['About', 'Journal', 'Contact', 'Stockists'],
}

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-brand-ink text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div className="space-y-4">
          <Link to="/" className="font-serif text-4xl tracking-[0.24em] text-stone-50">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-stone-300">
            Thoughtfully designed demi-fine jewelry for gifting, self-purchase, and the quietly polished everyday.
          </p>
          <div className="flex items-center gap-3 text-stone-300">
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
            <Pin className="h-5 w-5" />
          </div>
        </div>

        {Object.entries(footerGroups).map(([title, items]) => (
          <div key={title} className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.32em] text-brand-gold">{title}</h3>
            <ul className="space-y-3 text-sm text-stone-300">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-sm text-stone-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-300">
            <span className="rounded-full border border-white/10 px-3 py-2">Visa</span>
            <span className="rounded-full border border-white/10 px-3 py-2">Mastercard</span>
            <span className="rounded-full border border-white/10 px-3 py-2">Amex</span>
            <span className="rounded-full border border-white/10 px-3 py-2">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
