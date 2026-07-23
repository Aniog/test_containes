import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, CreditCard, Banknote } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { name: 'All Jewelry', href: '/shop' },
      { name: 'Earrings', href: '/shop?category=earrings' },
      { name: 'Necklaces', href: '/shop?category=necklaces' },
      { name: 'Huggies', href: '/shop?category=huggies' },
      { name: 'Gift Sets', href: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Shipping & Returns', href: '#' },
      { name: 'Size Guide', href: '#' },
      { name: 'Care Instructions', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Story', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Journal', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl tracking-wider text-ivory mb-4">VELMORA</h2>
            </Link>
            <p className="text-body-sm text-surface-400 max-w-xs leading-relaxed mb-6">
              Demi-fine gold jewelry crafted for the modern woman. 
              Designed to be treasured, priced to be accessible.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-surface-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className="text-caption tracking-wider uppercase text-ivory mb-5 font-sans font-medium">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-body-sm text-surface-400 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-surface-500">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-body-sm text-surface-500 mr-2">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(card => (
                  <div
                    key={card}
                    className="px-2 py-1 border border-surface-700 rounded text-[10px] text-surface-400 font-medium"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
