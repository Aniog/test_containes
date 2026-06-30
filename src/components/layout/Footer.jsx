import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'All Jewelry', href: '/shop' },
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
  ],
  help: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
  ],
  company: [
    { name: 'Our Story', href: '/about' },
    { name: 'Journal', href: '/journal' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
  ],
}

const paymentIcons = [
  { name: 'Visa', icon: 'VISA' },
  { name: 'Mastercard', icon: 'MC' },
  { name: 'Amex', icon: 'AMEX' },
  { name: 'PayPal', icon: 'PP' },
  { name: 'Apple Pay', icon: 'AP' },
]

export default function Footer() {
  return (
    <footer className="bg-espresso-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl text-cream-50 tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream-100/60 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Every piece designed to be treasured, 
              worn every day, and passed down through generations.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-cream-100/60 hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <svg size={20} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-medium tracking-ultra-wide text-cream-100/40 mb-4">
              SHOP
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-medium tracking-ultra-wide text-cream-100/40 mb-4">
              HELP
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-medium tracking-ultra-wide text-cream-100/40 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream-100/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="px-3 py-1.5 bg-cream-100/10 rounded text-xs font-medium text-cream-100/70"
                >
                  {icon.icon}
                </div>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-cream-100/40">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
