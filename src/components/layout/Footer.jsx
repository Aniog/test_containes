import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Youtube, Pin } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop' },
      { label: 'Necklaces', path: '/shop' },
      { label: 'Huggies', path: '/shop' },
      { label: 'Gift Sets', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/' },
      { label: 'Care Guide', path: '/' },
      { label: 'FAQ', path: '/' },
      { label: 'Track Order', path: '/' },
      { label: 'Contact Us', path: '/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/' },
      { label: 'Our Story', path: '/' },
      { label: 'Journal', path: '/' },
      { label: 'Sustainability', path: '/' },
      { label: 'Careers', path: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="text-2xl font-serif tracking-widest text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-50/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-cream-50/50 hover:text-cream-50 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-50/50 hover:text-cream-50 transition-colors" aria-label="Pinterest">
                <Pin className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-50/50 hover:text-cream-50 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-50/50 hover:text-cream-50 transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase text-cream-50 font-sans font-medium mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-cream-50/50 hover:text-cream-50 transition-colors"
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
        <div className="hairline border-ink-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-50/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-cream-50/40">Visa</span>
            <span className="text-xs text-cream-50/40">Mastercard</span>
            <span className="text-xs text-cream-50/40">Amex</span>
            <span className="text-xs text-cream-50/40">PayPal</span>
            <span className="text-xs text-cream-50/40">Afterpay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}