import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const columns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact', 'FAQ'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Reviews', 'Stockists'] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-[0.18em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Demi-fine gold jewelry for everyday rituals, luminous gifts, and the pieces you reach for again and again.</p>
            <div className="mt-7 flex gap-3">
              {[
                { label: 'Instagram', Icon: Instagram },
                { label: 'Facebook', Icon: Facebook },
                { label: 'TikTok', Icon: Music2 },
                { label: 'Email', Icon: Mail },
              ].map(({ label, Icon }) => (
                <a key={label} href="#" className="rounded-full border border-white/20 p-2 text-white/80 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label={label}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">{column.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {column.links.map((link) => (
                    <li key={link}><a href="#" className="transition hover:text-white">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/15 pt-7 text-xs uppercase tracking-[0.18em] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <div className="flex flex-wrap gap-2">
            {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((payment) => (
              <span key={payment} className="border border-white/15 px-3 py-1 text-white/70">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
