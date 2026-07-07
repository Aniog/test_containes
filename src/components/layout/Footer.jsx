import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '#' },
    { label: 'Care Guide', to: '#' },
    { label: 'FAQ', to: '#' },
    { label: 'Contact Us', to: '#' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '#' },
    { label: 'Press', to: '#' },
  ],
}

const FooterColumn = ({ title, links }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:block">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-full flex items-center justify-between py-2"
      >
        <h4 className="text-xs tracking-[0.15em] uppercase font-semibold text-champagne">{title}</h4>
        <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <h4 className="hidden md:block text-xs tracking-[0.15em] uppercase font-semibold mb-4 text-champagne">
        {title}
      </h4>
      <ul className={`space-y-3 ${open ? 'block pb-4' : 'hidden md:block'}`}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm text-stone-400 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo & tagline */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">VELMORA</Link>
            <p className="mt-4 text-stone-400 text-sm leading-relaxed">
              Demi-fine jewelry crafted with intention. Designed for the everyday and the unforgettable.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterColumn key={title} title={title} links={links} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-stone-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((name) => (
              <span
                key={name}
                className="text-[10px] tracking-wider uppercase text-stone-500 border border-stone-600 px-2 py-1"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {['Instagram', 'Pinterest', 'TikTok'].map((name) => (
              <a
                key={name}
                href="#"
                className="text-xs text-stone-500 hover:text-champagne transition-colors duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
