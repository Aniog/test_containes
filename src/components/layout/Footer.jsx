import { Facebook, Instagram, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping', 'Returns', 'Jewelry Care', 'Contact'],
  Company: ['About', 'Journal', 'Sustainability', 'Stockists'],
}

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-espresso px-4 py-14 text-ivory sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-ivory/12 pb-10 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-serif text-4xl tracking-[0.22em] text-ivory transition hover:text-gold"
            >
              VELMORA
            </button>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ivory/70">
              Demi-fine gold jewelry with an heirloom feeling and a direct-to-consumer price point.
            </p>
            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#top"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory transition hover:border-gold hover:text-gold"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="text-sm text-ivory/72 transition hover:text-ivory">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-ivory/58 sm:flex-row sm:items-center">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['VISA', 'MC', 'AMEX', 'PAY'].map((method) => (
              <span key={method} className="rounded border border-ivory/20 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-ivory/78">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
