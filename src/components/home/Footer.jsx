import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All Jewelry' },
    { to: '/collections', label: 'Collections' },
  ]

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Delivery' },
    { to: '/returns', label: 'Returns & Exchanges' },
    { to: '/care', label: 'Jewelry Care' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/press', label: 'Press' },
  ]

  return (
    <footer className="bg-warm-black border-t border-warm-charcoal">
      <div className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="font-serif text-xl tracking-heading font-semibold text-cream">
              VELMORA
            </Link>
            <p className="mt-3 font-sans text-sm text-cream/50 leading-relaxed">
              Demi-fine gold jewelry crafted for everyday elegance. Designed to be treasured.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-sm tracking-button uppercase text-cream mb-4">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-sans text-sm text-cream/50 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-sm tracking-button uppercase text-cream mb-4">Help</h4>
            <ul className="space-y-2">
              {helpLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-sans text-sm text-cream/50 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-sm tracking-button uppercase text-cream mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-sans text-sm text-cream/50 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-warm-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(name => (
              <span key={name} className="font-sans text-xs text-cream/40 border border-warm-charcoal px-2 py-1 rounded-sm">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
