import { Link } from 'react-router-dom'
import { footerColumns, paymentMethods } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-champagne bg-pearl py-14">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <Link to="/" className="font-serif text-3xl tracking-[0.24em] text-espresso">
            VELMORA
          </Link>
          <p className="max-w-md text-sm leading-7 text-mocha">
            Quietly luxurious demi-fine jewelry for everyday gifting and personal collecting.
          </p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-champagne px-4 py-2 text-xs uppercase tracking-[0.18em] text-mocha"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-mocha">{column.title}</h3>
              <ul className="space-y-3 text-sm text-espresso">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition duration-300 hover:text-gold"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
