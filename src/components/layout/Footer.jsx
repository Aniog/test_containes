import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['Our Story', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-ink text-velmora-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-luxe text-velmora-porcelain">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-sand">
              Demi-fine gold jewelry designed with heirloom warmth, modern ease, and a direct-to-you price.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center border border-velmora-porcelain/20 text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-velmora-sand transition hover:text-velmora-porcelain">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-velmora-porcelain/15 pt-7 text-xs text-velmora-sand sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2 text-velmora-porcelain">
            {['VISA', 'AMEX', 'MC', 'APPLE PAY'].map((payment) => (
              <span key={payment} className="border border-velmora-porcelain/20 px-2.5 py-1 text-[0.62rem] tracking-[0.16em]">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
