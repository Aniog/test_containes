import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/about' },
    { label: 'Size Guide', to: '/about' },
    { label: 'FAQ', to: '/about' },
    { label: 'Contact Us', to: '/about' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/about' },
    { label: 'Sustainability', to: '/about' },
    { label: 'Careers', to: '/about' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'TikTok', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-cream/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Demi-fine gold jewelry designed for the modern woman — 
              premium quality, accessible luxury.
            </p>
            {/* Social icons */}
            <div className="flex gap-6 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-xs tracking-wider uppercase text-brand-cream/40 hover:text-brand-gold transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-brand-cream/60 mb-6">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-cream/50 hover:text-brand-gold-pale transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-brand-cream/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-cream/30">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            {/* Payment icons */}
            <div className="flex items-center gap-4">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
                <span
                  key={method}
                  className="text-[10px] tracking-wider uppercase text-brand-cream/25 border border-brand-cream/10 px-2 py-1"
                >
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
