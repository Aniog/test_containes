import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold tracking-[0.16em]">VELMORA</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">Demi-fine gold jewelry designed for everyday rituals, meaningful gifts, and the pieces you keep close.</p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/20 p-3 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Velmora social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-bold uppercase tracking-widerluxe text-velmora-gold">{heading}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-gold">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-ivory/15 pt-8 text-xs text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Accepted payments">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-ivory/20 px-3 py-1 text-[10px] font-semibold tracking-luxe text-velmora-ivory">{payment}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
