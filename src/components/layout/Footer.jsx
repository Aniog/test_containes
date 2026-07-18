import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  shop: [
    { name: 'All Jewelry', path: '/shop' },
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Gift Sets', path: '/shop' },
  ],
  help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  company: [
    { name: 'Our Story', path: '#' },
    { name: 'Sustainability', path: '#' },
    { name: 'Journal', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine gold jewelry designed for the modern woman — elegant enough for special occasions, durable enough for every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-sans tracking-wider uppercase text-white/50 hover:text-velmora-gold-light transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-white/40 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-velmora-gold-light transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-[10px] font-sans tracking-wider uppercase text-white/30 border border-white/10 px-2 py-1 rounded"
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
