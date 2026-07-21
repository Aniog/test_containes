import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'Bestsellers', to: '/shop' },
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
    { label: 'Press', to: '#' },
    { label: 'Careers', to: '#' },
  ],
}

const socialLinks = [
  { label: 'Instagram', icon: 'IG' },
  { label: 'Pinterest', icon: 'PI' },
  { label: 'TikTok', icon: 'TK' },
  { label: 'Facebook', icon: 'FB' },
]

const paymentIcons = ['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman —
              hypoallergenic, 18K gold plated, and made to last.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-medium text-white/60 hover:text-white hover:border-velmora-gold hover:bg-velmora-gold/10 transition-all"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/60 hover:text-velmora-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] font-medium tracking-wide text-white/30 border border-white/10 rounded px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
