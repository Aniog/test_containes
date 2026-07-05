import { CreditCard, Instagram, Mail, Music2 } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews'] },
]

const Footer = ({ onNavigate }) => (
  <footer className="bg-velmora-ink text-velmora-ivory">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8 lg:py-20">
      <div>
        <button type="button" onClick={() => onNavigate('home')} className="font-serif text-4xl tracking-[0.22em] text-velmora-ivory">VELMORA</button>
        <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">Demi-fine gold jewelry designed for everyday rituals, thoughtful gifting, and quiet moments of celebration.</p>
        <div className="mt-7 flex items-center gap-3 text-velmora-sand">
          <Instagram className="h-5 w-5" />
          <Music2 className="h-5 w-5" />
          <Mail className="h-5 w-5" />
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-3">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-luxe text-velmora-gold">{column.title}</h3>
            <ul className="space-y-3 text-sm text-velmora-sand">
              {column.links.map((link) => (
                <li key={link}>
                  <button type="button" className="transition hover:text-velmora-ivory">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-velmora-ivory/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Velmora Fine Jewelry. Crafted for the everyday heirloom.</p>
        <div className="flex items-center gap-3" aria-label="Accepted payment methods">
          <CreditCard className="h-5 w-5" />
          <span className="rounded border border-velmora-sand/40 px-2 py-1">VISA</span>
          <span className="rounded border border-velmora-sand/40 px-2 py-1">AMEX</span>
          <span className="rounded border border-velmora-sand/40 px-2 py-1">PAY</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
