import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Mail, Music2 } from "lucide-react"

const columns = [
  { title: "Shop", links: ["Bestsellers", "Earrings", "Necklaces", "Huggies", "Gift Sets"] },
  { title: "Help", links: ["Shipping", "Returns", "Care Guide", "Sizing", "Contact"] },
  { title: "Company", links: ["Our Story", "Journal", "Sustainability", "Wholesale", "Reviews"] },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-velmora-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <Link to="/" className="font-serif text-4xl font-semibold tracking-[0.16em] text-velmora-ivory">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-velmora-pearl">
              Demi-fine gold jewelry designed for everyday ritual, generous gifting, and the pieces you keep reaching for.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Mail, Music2].map((Icon, index) => (
                <a key={index} href="#" className="rounded-full border border-velmora-ivory/15 p-3 text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-velmora-champagne">
                  {column.title}
                </h3>
                <ul className="space-y-3 text-sm text-velmora-pearl">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-velmora-champagne">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-velmora-ivory/10 pt-8 text-sm text-velmora-pearl md:flex-row md:items-center md:justify-between">
          <p>© 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex flex-wrap gap-2" aria-label="Accepted payment methods">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment) => (
              <span key={payment} className="rounded-full border border-velmora-ivory/15 px-3 py-1 text-xs text-velmora-ivory">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
