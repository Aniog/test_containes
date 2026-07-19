import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Pinterest, Youtube } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Huggies', path: '/shop?category=huggies' },
      { label: 'Gift Sets', path: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'Care Guide', path: '/care' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Size Guide', path: '/size-guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', path: '/about' },
      { label: 'Journal', path: '/journal' },
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Careers', path: '/careers' },
    ],
  },
]

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay']

export default function Footer() {
  return (
    <footer className="bg-dark text-footer-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="text-sm text-footer-text/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Made to be treasured, worn daily, and passed down.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-footer-text/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/60 hover:text-gold transition-colors" aria-label="Pinterest">
                <Pinterest className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/60 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-footer-text/60 hover:text-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-[0.12em] text-white font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-footer-text/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <span
                  key={icon}
                  className="text-xs text-footer-text/40 uppercase tracking-wider border border-white/10 px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-footer-text/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}