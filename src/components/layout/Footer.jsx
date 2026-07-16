import { Instagram, Facebook } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  {
    title: 'Help',
    links: ['Shipping', 'Returns', 'Care Guide', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
  },
]

const Footer = () => {
  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-5">
            <p className="font-display text-4xl tracking-[0.22em] text-ivory">VELMORA</p>
            <p className="max-w-sm text-sm leading-7 text-ivory/70">
              Demi-fine jewelry designed for daily rituals, meaningful gifting, and lasting shine.
            </p>
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-ivory/70">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <span>Pinterest</span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.28em] text-ivory/60">{column.title}</h3>
                <ul className="space-y-3 text-sm text-ivory/80">
                  {column.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-ivory/10 pt-6 text-sm text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 uppercase tracking-[0.18em]">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
