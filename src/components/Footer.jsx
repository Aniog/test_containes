import React from 'react'
import { Link } from 'react-router-dom'

const shopLinks = [
  { label: 'All Jewelry', to: '/collection' },
  { label: 'Earrings', to: '/collection?category=earrings' },
  { label: 'Necklaces', to: '/collection?category=necklaces' },
  { label: 'Huggies', to: '/collection?category=huggies' },
  { label: 'Sets', to: '/collection?category=sets' },
]

const helpLinks = [
  { label: 'Shipping & Returns', to: '#' },
  { label: 'Size Guide', to: '#' },
  { label: 'FAQ', to: '#' },
  { label: 'Contact Us', to: '#' },
  { label: 'Track Order', to: '#' },
]

const companyLinks = [
  { label: 'Our Story', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
  { label: 'Sustainability', to: '#' },
  { label: 'Press', to: '#' },
  { label: 'Careers', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-ultrawide text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who values quiet luxury.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Facebook'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-[10px] font-medium uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(method => (
              <span
                key={method}
                className="px-2 py-1 border border-white/15 rounded text-[9px] text-white/40 font-medium uppercase"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
