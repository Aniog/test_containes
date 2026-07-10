import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
      { label: 'New Arrivals', to: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', to: '#' },
      { label: 'Size Guide', to: '#' },
      { label: 'Care Instructions', to: '#' },
      { label: 'FAQ', to: '#' },
      { label: 'Contact Us', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '#' },
      { label: 'Press', to: '#' },
      { label: 'Careers', to: '#' },
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
    <footer className="bg-brand-warm-black text-brand-warm-gray-lighter">
      <div className="max-w-7xl mx-auto section-padding pt-16 md:pt-20 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-wider text-brand-cream font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-warm-gray-light max-w-sm">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-brand-warm-gray-light hover:text-brand-gold transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="font-sans text-[11px] tracking-[0.15em] uppercase text-brand-cream font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-brand-warm-gray-light hover:text-brand-gold transition-colors duration-300"
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
        <div className="h-px bg-brand-warm-gray/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-[11px] text-brand-warm-gray/60 tracking-wide">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-[11px] text-brand-warm-gray/60 hover:text-brand-gold transition-colors duration-300 tracking-wide">Privacy Policy</Link>
            <Link to="#" className="text-[11px] text-brand-warm-gray/60 hover:text-brand-gold transition-colors duration-300 tracking-wide">Terms of Service</Link>
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['Visa', 'MC', 'Amex', 'PayPal'].map(name => (
              <span key={name} className="text-[10px] text-brand-warm-gray/50 border border-brand-warm-gray/20 px-2.5 py-1 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
