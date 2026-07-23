import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react'

export default function Footer() {
  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Gift Sets' },
    { to: '/shop', label: 'All Jewelry' },
  ]

  const helpLinks = [
    { to: '/faq', label: 'FAQ' },
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/care', label: 'Jewelry Care' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/size-guide', label: 'Size Guide' },
  ]

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/press', label: 'Press' },
    { to: '/careers', label: 'Careers' },
  ]

  return (
    <footer className="bg-stone-900 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/">
              <h2 className="font-serif text-3xl font-medium tracking-wide text-cream-50">
                VELMORA
              </h2>
            </Link>
            <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-xs">
              Crafted for the modern woman who values quiet luxury. Demi-fine gold jewelry designed to be treasured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-400 mb-5">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-stone-300 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-400 mb-5">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-stone-300 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-400 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-sm text-stone-300 hover:text-gold-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-stone-500">
            <CreditCard className="w-5 h-5" />
            <span className="font-sans text-xs tracking-wider">VISA · MASTERCARD · AMEX · PAYPAL · APPLE PAY</span>
          </div>
          <p className="font-sans text-xs text-stone-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
