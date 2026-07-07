import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Music, Camera } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { name: 'All Jewelry', path: '/shop' },
      { name: 'Earrings', path: '/shop?category=Earrings' },
      { name: 'Necklaces', path: '/shop?category=Necklaces' },
      { name: 'Huggies', path: '/shop?category=Huggies' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Shipping & Returns', path: '/shipping' },
      { name: 'Care Guide', path: '/care' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/story' },
      { name: 'Journal', path: '/journal' },
      { name: 'Sustainability', path: '/sustainability' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Logo & social */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider font-semibold text-white">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 mt-3 max-w-xs leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              {[Camera, Heart, Music].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/60 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
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
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-3">
            {['AE', 'MC', 'VI', 'PP'].map((code) => (
              <span
                key={code}
                className="w-10 h-7 bg-white/5 border border-white/10 flex items-center justify-center text-[8px] text-white/40 font-mono"
              >
                {code}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}