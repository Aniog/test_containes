import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
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
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
      { label: 'Track Order', to: '#' },
    ],
    Company: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  }

  return (
    <footer className="bg-slate-850 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 lg:py-20">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-light text-cream-50 block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-cream-300/60 leading-relaxed mb-6 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream-300/40 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300/40 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-cream-300/40 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[10px] uppercase tracking-mega-wide text-cream-200 mb-5 font-medium">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cream-300/50 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment & copyright */}
        <div className="border-t border-cream-100/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-300/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment icons - simple text representations */}
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
                <span key={method} className="text-[9px] uppercase tracking-wider text-cream-300/30 font-sans border border-cream-100/10 px-2 py-1">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
