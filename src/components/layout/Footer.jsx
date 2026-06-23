import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-pearl">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <p className="font-serifDisplay text-4xl font-semibold tracking-[0.16em]">VELMORA</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for golden hours, keepsake gifting, and everyday rituals.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold">{heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-champagne">
                  {links.map((link) => (
                    <li key={link}>
                      <a className="transition hover:text-velmora-pearl" href="/shop">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold">Follow</h3>
            <div className="mt-4 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="rounded-full border border-velmora-pearl/20 p-2 text-velmora-pearl transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-velmora-espresso">
              {['Visa', 'Amex', 'PayPal', 'Apple Pay'].map((item) => (
                <span key={item} className="bg-velmora-champagne px-3 py-2 text-velmora-ink">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-velmora-pearl/15 pt-6 text-xs text-velmora-champagne">
          © 2026 Velmora Fine Jewelry. Crafted direct to you.
        </div>
      </div>
    </footer>
  )
}
