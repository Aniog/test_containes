import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const shopLinks = [
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'New Arrivals', path: '/shop' },
    { label: 'Bestsellers', path: '/shop' },
  ]

  const helpLinks = [
    { label: 'Shipping & Returns', path: '/about' },
    { label: 'Care Guide', path: '/about' },
    { label: 'FAQ', path: '/about' },
    { label: 'Contact Us', path: '/about' },
  ]

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
    { label: 'Sustainability', path: '/about' },
  ]

  return (
    <footer className="bg-deepCharcoal text-textLight">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] uppercase font-medium text-textLight">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-textMuted mt-4 leading-relaxed">
              Demi-fine jewelry crafted with intention.<br />
              Warm gold. Quiet luxury. Made to be treasured.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-textMuted hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-textMuted hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-textMuted hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.15em] uppercase font-medium text-gold mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-textMuted hover:text-textLight transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.15em] uppercase font-medium text-gold mb-4">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-textMuted hover:text-textLight transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-sm tracking-[0.15em] uppercase font-medium text-gold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="font-sans text-sm text-textMuted hover:text-textLight transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-divider/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-textMuted">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-textMuted">Visa</span>
            <span className="font-sans text-xs text-textMuted">·</span>
            <span className="font-sans text-xs text-textMuted">Mastercard</span>
            <span className="font-sans text-xs text-textMuted">·</span>
            <span className="font-sans text-xs text-textMuted">Apple Pay</span>
            <span className="font-sans text-xs text-textMuted">·</span>
            <span className="font-sans text-xs text-textMuted">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
