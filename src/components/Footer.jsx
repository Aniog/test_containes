import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { name: 'All Jewelry', path: '/collection' },
    { name: 'Earrings', path: '/collection?category=earrings' },
    { name: 'Necklaces', path: '/collection?category=necklaces' },
    { name: 'Huggies', path: '/collection?category=huggies' },
    { name: 'Gift Sets', path: '/collection' },
  ],
  Help: [
    { name: 'Shipping & Returns', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Size Guide', path: '#' },
    { name: 'Contact Us', path: '#' },
    { name: 'Track Order', path: '#' },
  ],
  Company: [
    { name: 'Our Story', path: '#' },
    { name: 'Sustainability', path: '#' },
    { name: 'Journal', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Careers', path: '#' },
  ],
}

const socialLinks = [
  { name: 'Instagram', url: '#' },
  { name: 'Pinterest', url: '#' },
  { name: 'TikTok', url: '#' },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay']

export default function Footer() {
  return (
    <footer className="bg-deep-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl font-light text-white">
              VELMORA
            </Link>
            <p className="mt-6 text-gray-400 font-sans text-sm leading-relaxed max-w-xs">
              Crafted for those who appreciate quiet luxury. Demi-fine gold jewelry
              designed to be treasured, not just worn.
            </p>
            <div className="mt-8 flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  className="font-sans text-xs uppercase tracking-widest text-gray-400 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-gray-300 mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-sans text-sm text-gray-400 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentMethods.map(method => (
                <span
                  key={method}
                  className="font-sans text-[10px] uppercase tracking-wider text-gray-500 border border-gray-700 px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
