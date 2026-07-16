import { Facebook, Instagram, Mail, ShieldCheck } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="velmora-container py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-serif text-4xl tracking-wide">VELMORA</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
              Demi-fine gold jewelry designed for everyday rituals, quiet celebrations, and gifts that feel considered.
            </p>
            <div className="mt-6 flex items-center gap-3 text-velmora-linen">
              <Instagram className="h-5 w-5" />
              <Facebook className="h-5 w-5" />
              <Mail className="h-5 w-5" />
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-nav text-velmora-gold">{column.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-linen">
                  {column.links.map((link) => <li key={link}><a href="#" className="hover:text-velmora-ivory">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-6 text-xs uppercase tracking-nav text-velmora-linen sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-velmora-gold" />
            <span>Visa</span><span>Mastercard</span><span>Amex</span><span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
