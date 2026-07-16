import { Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Bestsellers', 'Earrings', 'Necklaces', 'Huggies'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="grid gap-10 border-b border-velmora-ivory/15 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.18em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-ivory/72">
              Premium-but-accessible demi-fine jewelry designed for the everyday ceremony of getting dressed.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Velmora social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-velmora-ivory/20 text-velmora-ivory transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">{heading}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-ivory/75">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-velmora-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payments">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-ivory/20 px-2 py-1 text-[10px] tracking-[0.16em] text-velmora-ivory/75">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
