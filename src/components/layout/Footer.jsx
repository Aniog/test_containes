import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Size Guide', to: '#' },
    { label: 'Care Instructions', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Journal', to: '/#journal' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/">
              <h2 className="font-serif text-2xl tracking-nav uppercase text-cream-100 mb-4">
                Velmora
              </h2>
            </Link>
            <p className="text-sm text-charcoal-300 leading-relaxed mb-6">
              Crafted to be treasured. Fine demi-fine jewelry for the modern woman.
            </p>
            {/* Payment icons */}
            <div className="flex items-center gap-3 text-charcoal-400 text-xs">
              <span className="border border-charcoal-600 rounded px-2 py-1">VISA</span>
              <span className="border border-charcoal-600 rounded px-2 py-1">MC</span>
              <span className="border border-charcoal-600 rounded px-2 py-1">AMEX</span>
              <span className="border border-charcoal-600 rounded px-2 py-1">PayPal</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs tracking-nav uppercase font-semibold text-cream-100 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors duration-300"
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
        <div className="mt-16 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-charcoal-400 hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-charcoal-400 hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg>
              </a>
              <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
