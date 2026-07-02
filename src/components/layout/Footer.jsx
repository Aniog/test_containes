import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'],
  Help: ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us'],
  Company: ['Our Story', 'Sustainability', 'Press', 'Careers'],
}

export function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-[0.18em]">
              VELMORA
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200">
              Demi-fine jewelry designed for the everyday muse. Crafted in 18K gold plate,
              made to be treasured.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-cream-200 transition-colors hover:text-gold" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-200 transition-colors hover:text-gold" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-200 transition-colors hover:text-gold" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream-200 transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-600/30 pt-8 md:flex-row">
          <p className="text-xs text-cream-200">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['visa', 'mastercard', 'amex', 'paypal'].map((icon) => (
              <span
                key={icon}
                className="flex h-7 items-center justify-center rounded bg-cream-50 px-2 text-[10px] font-semibold uppercase tracking-wide text-espresso-900"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
