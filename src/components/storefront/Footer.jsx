import { Instagram, MoveRight, Music2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['New Arrivals', 'Earrings', 'Necklaces', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Privacy', 'Terms'],
}

const Footer = () => {
  return (
    <footer className="border-t border-line bg-bark text-pearl">
      <div className="section-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,2fr]">
          <div>
            <Link to="/" className="font-serif text-2xl uppercase tracking-[0.34em] text-pearl">
              Velmora
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-pearl/70">
              Premium demi-fine jewelry for gifting and self-adornment, designed with warmth, polish, and lasting ease.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-pearl/80">
              <span className="rounded-full border border-pearl/15 px-3 py-2">Visa</span>
              <span className="rounded-full border border-pearl/15 px-3 py-2">Mastercard</span>
              <span className="rounded-full border border-pearl/15 px-3 py-2">Amex</span>
              <span className="rounded-full border border-pearl/15 px-3 py-2">PayPal</span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, items]) => (
              <div key={heading}>
                <h3 className="text-xs uppercase tracking-[0.24em] text-pearl/55">{heading}</h3>
                <ul className="mt-5 space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-pearl/78 transition-colors duration-300 hover:text-pearl">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-pearl/10 pt-8 text-sm text-pearl/65 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pearl/15 transition-colors duration-300 hover:border-pearl/40 hover:text-pearl">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Pinterest" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pearl/15 transition-colors duration-300 hover:border-pearl/40 hover:text-pearl">
              <Sparkles className="h-4 w-4" />
            </a>
            <a href="#" aria-label="TikTok" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-pearl/15 transition-colors duration-300 hover:border-pearl/40 hover:text-pearl">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
          <p>© 2026 Velmora Fine Jewelry. Crafted to be treasured.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 uppercase tracking-[0.18em] text-pearl/78 transition-colors duration-300 hover:text-pearl">
            Shop now <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
