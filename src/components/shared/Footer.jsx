import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'New Arrivals', path: '/shop' },
      { label: 'Bestsellers', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/about' },
      { label: 'Care Guide', path: '/about' },
      { label: 'Size Guide', path: '/about' },
      { label: 'Contact Us', path: '/about' },
      { label: 'FAQ', path: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/about' },
      { label: 'Press', path: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="h-px bg-divider-dark" />
      <div className="max-w-8xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Logo */}
        <div className="mb-12">
          <Link to="/" className="font-serif text-2xl tracking-ui uppercase font-semibold text-cream">
            VELMORA
          </Link>
          <p className="font-sans text-sm text-text-muted-light mt-2 max-w-xs">
            Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, made for everyday elegance.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-ui uppercase text-gold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="font-sans text-sm text-text-muted-light hover:text-cream transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Newsletter mini */}
          <div>
            <h4 className="font-sans text-xs tracking-ui uppercase text-gold mb-4">Stay Connected</h4>
            <p className="font-sans text-sm text-text-muted-light mb-4">Join for early access and 10% off your first order.</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="text-text-muted-light hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-text-muted-light hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-text-muted-light hover:text-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment icons & bottom */}
        <div className="h-px bg-divider-dark mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-muted-light">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs text-text-muted-light">Visa</span>
            <span className="font-sans text-xs text-text-muted-light">Mastercard</span>
            <span className="font-sans text-xs text-text-muted-light">Amex</span>
            <span className="font-sans text-xs text-text-muted-light">PayPal</span>
            <span className="font-sans text-xs text-text-muted-light">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
