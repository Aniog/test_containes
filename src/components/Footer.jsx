import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Globe, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Sets', href: '/shop?category=sets' },
    { label: 'Bestsellers', href: '/shop?sort=bestsellers' },
  ],
  Help: [
    { label: 'Shipping & Delivery', href: '#' },
    { label: 'Returns & Exchanges', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Guide', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
}

const paymentIcons = [
  { name: 'Visa', url: 'https://cdn.jsdelivr.net/npm/payment-icons@1.0.0/icons/visa.svg' },
  { name: 'Mastercard', url: 'https://cdn.jsdelivr.net/npm/payment-icons@1.0.0/icons/mastercard.svg' },
  { name: 'Amex', url: 'https://cdn.jsdelivr.net/npm/payment-icons@1.0.0/icons/amex.svg' },
  { name: 'PayPal', url: 'https://cdn.jsdelivr.net/npm/payment-icons@1.0.0/icons/paypal.svg' },
  { name: 'Apple Pay', url: 'https://cdn.jsdelivr.net/npm/payment-icons@1.0.0/icons/applepay.svg' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-18">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-white">
              VELMORA
            </Link>
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              Demi-fine gold jewelry crafted for the moments that matter. Quiet luxury, enduring quality.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Globe, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="hairline border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {paymentIcons.map((icon) => (
              <img
                key={icon.name}
                src={icon.url}
                alt={icon.name}
                className="h-5 opacity-50 grayscale"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            ))}
          </div>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}