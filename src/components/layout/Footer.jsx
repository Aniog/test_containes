import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = {
  Shop: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Stockists', 'Gift Cards'],
}

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,2fr]">
          <div className="space-y-5">
            <p className="font-display text-3xl tracking-[0.32em]">VELMORA</p>
            <p className="max-w-md text-sm leading-7 text-velmora-ivory/72">
              Fine-feeling demi-fine jewelry designed for everyday ritual,
              thoughtful gifting, and quiet confidence.
            </p>
            <div className="flex items-center gap-3 text-velmora-ivory/80">
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
              <Twitter className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, items]) => (
              <div key={title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-gold">
                  {title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-ivory/75">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-velmora-ivory/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1">Visa</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Mastercard</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Amex</span>
            <span className="rounded-full border border-white/10 px-3 py-1">PayPal</span>
          </div>
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
