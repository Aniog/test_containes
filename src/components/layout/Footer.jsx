import { Facebook, Instagram, Mail, Music2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Care Guide', 'Contact'],
  Company: ['About Velmora', 'Journal', 'Sustainability', 'Stockists'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link to="/" className="font-serif text-4xl tracking-velmora text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-champagne">
              Demi-fine gold jewelry designed for the rituals you keep, the milestones you mark, and the pieces you never take off.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Instagram, Facebook, Music2, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="rounded-full border border-velmora-champagne/30 p-2 text-velmora-champagne transition hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-espresso"
                  aria-label="Velmora social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">{heading}</h3>
                <ul className="mt-5 space-y-3 text-sm text-velmora-champagne">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-ivory">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-champagne/20 pt-8 text-sm text-velmora-champagne sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-2" aria-label="Accepted payment methods">
            {['VISA', 'AMEX', 'PAY', 'MC'].map((payment) => (
              <span key={payment} className="rounded border border-velmora-champagne/30 px-2.5 py-1 text-[0.65rem] font-bold tracking-widest">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
