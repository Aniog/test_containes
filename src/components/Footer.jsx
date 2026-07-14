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
    <footer className="bg-charcoal text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-mega font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-stone-400 text-sm font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and made for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-light transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs tracking-ultrawide uppercase font-sans font-semibold mb-4 text-stone-300">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-stone-400 hover:text-gold-light transition-colors font-sans"
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
        <div className="hairline mt-12 pt-8 border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-stone-400 font-sans">Visa</span>
            <span className="text-xs text-stone-400 font-sans">Mastercard</span>
            <span className="text-xs text-stone-400 font-sans">Amex</span>
            <span className="text-xs text-stone-400 font-sans">PayPal</span>
            <span className="text-xs text-stone-400 font-sans">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
