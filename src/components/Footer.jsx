import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
  ],
  help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-text-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em] font-semibold uppercase">
              Velmora
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-velmora-text-light/70">
              Demi-fine jewelry designed to be treasured. Hand-finished pieces for everyday elegance and meaningful gifting.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-velmora-text-light/70 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-text-light/70 hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-velmora-text-light/70 hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Shop</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-text-light/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Help</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-text-light/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-velmora-text-light/70 hover:text-velmora-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-velmora-border-dark pt-8 md:flex-row">
          <p className="text-xs text-velmora-text-light/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-velmora-text-light/50">
            <span className="h-6 w-10 rounded bg-velmora-text-light/10 flex items-center justify-center">VISA</span>
            <span className="h-6 w-10 rounded bg-velmora-text-light/10 flex items-center justify-center">MC</span>
            <span className="h-6 w-10 rounded bg-velmora-text-light/10 flex items-center justify-center">Amex</span>
            <span className="h-6 w-10 rounded bg-velmora-text-light/10 flex items-center justify-center">PP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
