import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Shop',
    links: [
      { to: '/shop', label: 'All Jewelry' },
      { to: '/shop/earrings', label: 'Earrings' },
      { to: '/shop/necklaces', label: 'Necklaces' },
      { to: '/shop/huggies', label: 'Huggies' },
      { to: '/shop/sets', label: 'Gift Sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/help/shipping', label: 'Shipping' },
      { to: '/help/returns', label: 'Returns' },
      { to: '/help/care', label: 'Materials & Care' },
      { to: '/help/faq', label: 'FAQ' },
      { to: '/help/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'Our Story' },
      { to: '/journal', label: 'Journal' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/press', label: 'Press' },
      { to: '/careers', label: 'Careers' },
    ],
  },
]

const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="container-page py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-4">
            <Link
              to="/"
              aria-label="Velmora — Home"
              className="font-serif text-2xl tracking-[0.32em] text-cream block"
            >
              VELMORA
            </Link>
            <p className="body-light mt-5 max-w-sm">
              Demi-fine jewelry, designed in New York and made by hand in our partner ateliers.
              18K gold-plated, hypoallergenic, and crafted to be treasured.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-cream/70 hover:text-champagne transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="text-cream/70 hover:text-champagne transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="eyebrow-light text-cream mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream/75 hover:text-champagne transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-2">
            <h3 className="eyebrow-light text-cream mb-5">Studio</h3>
            <address className="not-italic text-sm text-cream/75 space-y-1 leading-relaxed">
              <div>14 Greene Street</div>
              <div>New York, NY 10013</div>
              <div className="pt-2">hello@velmora.com</div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[11px] tracking-eyebrow uppercase font-sans text-cream/55">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {PAYMENT_METHODS.map((m) => (
              <li
                key={m}
                className="text-[11px] tracking-eyebrow uppercase font-sans text-cream/55"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
