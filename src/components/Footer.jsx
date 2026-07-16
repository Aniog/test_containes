import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Globe } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', path: '/shipping' },
      { label: 'Returns & Exchanges', path: '/returns' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Track Order', path: '/track' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  },
]

const paymentIcons = [
  'Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna',
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-extra-wide text-cream-50">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-cream-300 leading-relaxed max-w-xs font-sans">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 border border-cream-700 rounded-full flex items-center justify-center text-cream-400 hover:text-cream-50 hover:border-cream-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-cream-700 rounded-full flex items-center justify-center text-cream-400 hover:text-cream-50 hover:border-cream-50 transition-colors"
                aria-label="Pinterest"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase text-cream-400 font-sans mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream-300 hover:text-cream-50 transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Payment icons */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="text-[11px] text-cream-500 uppercase tracking-wider font-sans border border-cream-800/30 px-2.5 py-1 rounded"
              >
                {icon}
              </span>
            ))}
          </div>

          <p className="text-xs text-cream-600 font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}