import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, X } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Track Order', path: '/track' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Story', path: '/story' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-velvet-900 text-velvet-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wider font-semibold text-white inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-velvet-400 text-sm leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              finished by hand, and built to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velvet-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold transition-colors" aria-label="Pinterest">
                <span className="text-xs font-bold tracking-wider">P</span>
              </a>
              <a href="#" className="text-velvet-400 hover:text-gold transition-colors" aria-label="X (Twitter)">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-xs uppercase tracking-[0.12em] mb-4 font-medium">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-velvet-400 text-sm hover:text-gold transition-colors"
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
        <div className="mt-16 pt-8 border-t border-velvet-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-velvet-500 text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-velvet-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
          <div className="flex gap-3">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span key={method} className="text-velvet-500 text-[10px] uppercase tracking-wider border border-velvet-700 px-2 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}