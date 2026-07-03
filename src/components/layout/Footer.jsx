import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  shop: [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop', label: 'All' },
    { to: '/shop?category=necklaces', label: 'Gifts' },
  ],
  help: [
    { to: '/about', label: 'About Us' },
    { to: '/about', label: 'Contact' },
    { to: '/about', label: 'Shipping & Returns' },
    { to: '/about', label: 'FAQ' },
    { to: '/about', label: 'Size Guide' },
  ],
  company: [
    { to: '/about', label: 'Our Story' },
    { to: '/about', label: 'Sustainability' },
    { to: '/about', label: 'Press' },
    { to: '/about', label: 'Careers' },
    { to: '/about', label: 'Affiliates' },
  ],
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="inline-block">
                <span className="font-serif text-2xl tracking-wide text-white">VELMORA</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Demi-fine jewelry designed to be treasured. Crafted with care, worn with confidence.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">Shop</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">Help</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {paymentIcons.map((icon) => (
                <span key={icon} className="text-xs text-white/50">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
