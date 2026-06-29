import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Care Guide', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-warm-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold text-white hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="mt-4 text-warm-gray-light text-sm leading-relaxed">
              Demi-fine jewelry crafted with intention. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-warm-gray-light hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray-light hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray-light hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-[0.15em] uppercase font-semibold text-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-warm-gray-light text-sm hover:text-white transition-colors duration-300"
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
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-warm-gray text-xs">Visa</span>
            <span className="text-warm-gray text-xs">Mastercard</span>
            <span className="text-warm-gray text-xs">Amex</span>
            <span className="text-warm-gray text-xs">PayPal</span>
            <span className="text-warm-gray text-xs">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
