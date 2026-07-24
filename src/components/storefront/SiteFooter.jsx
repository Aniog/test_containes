import { Instagram, Sparkles } from 'lucide-react'

const footerColumns = {
  Shop: ['New Arrivals', 'Bestsellers', 'Gift Sets', 'Necklaces'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'FAQs'],
  Company: ['About Velmora', 'Journal', 'Contact', 'Privacy'],
}

const SiteFooter = () => {
  return (
    <footer className="border-t border-velmora-sand bg-velmora-cocoa text-velmora-sand">
      <div className="velmora-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-[0.35em] text-velmora-ivory">
              VELMORA
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-velmora-sand/85">
              Quietly luminous demi-fine jewelry for everyday rituals, meaningful gifting, and polished self-purchase.
            </p>
            <div className="mt-8 flex items-center gap-3 text-velmora-ivory">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-[11px] uppercase tracking-widest text-velmora-sand">
                Pinterest
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs uppercase tracking-luxe text-velmora-gold">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-velmora-sand/85">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-widest text-velmora-sand/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry</p>
          <p>Visa · Mastercard · Amex · Apple Pay · Shop Pay</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
