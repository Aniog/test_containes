import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'

const footerColumns = [
  { title: 'Shop', links: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'] },
  { title: 'Help', links: ['Shipping', 'Returns', 'Care Guide', 'Contact'] },
  { title: 'Company', links: ['Our Story', 'Journal', 'Sustainability', 'Gift Cards'] },
]

const Footer = () => (
  <footer className="bg-velmora-espresso text-velmora-cream">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-serif text-4xl font-semibold tracking-velmora">VELMORA</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-linen">
            Demi-fine gold jewelry for daily rituals, thoughtful gifting, and moments that deserve a little more light.
          </p>
          <div className="mt-7 flex gap-3 text-velmora-champagne">
            <a className="rounded-full border border-velmora-cream/15 p-2 transition hover:border-velmora-champagne" href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a className="rounded-full border border-velmora-cream/15 p-2 transition hover:border-velmora-champagne" href="#" aria-label="TikTok"><Music2 className="h-4 w-4" /></a>
            <a className="rounded-full border border-velmora-cream/15 p-2 transition hover:border-velmora-champagne" href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a className="rounded-full border border-velmora-cream/15 p-2 transition hover:border-velmora-champagne" href="mailto:hello@velmora.example" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-velmora text-velmora-champagne">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-velmora-linen">
                {column.links.map((link) => (
                  <li key={link}><a href="#" className="transition hover:text-velmora-champagne">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-5 border-t border-velmora-cream/15 pt-7 text-xs uppercase tracking-product text-velmora-linen sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Velmora Fine Jewelry</p>
        <div className="flex flex-wrap gap-2">
          {['Visa', 'Amex', 'Mastercard', 'Apple Pay'].map((payment) => (
            <span key={payment} className="rounded-full border border-velmora-cream/15 px-3 py-1 text-velmora-cream">{payment}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
