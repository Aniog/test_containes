import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'],
}

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em] uppercase">
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/80">
              Demi-fine jewelry designed for everyday luxury. Each piece is crafted to be treasured, gifted, and worn with intention.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-cream-200/80 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-200/80 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream-200/80 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-cream-100/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay'].map((icon) => (
              <div
                key={icon}
                className="h-6 w-10 rounded bg-cream-100/10 flex items-center justify-center text-[10px] uppercase tracking-wide text-cream-200/60"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
