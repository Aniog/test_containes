import { Link } from 'react-router-dom'

const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  help: [
    { label: 'Contact Us', href: '#' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'Size Guide', href: '#' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '#' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Pinterest', href: '#', icon: 'PI' },
  { label: 'TikTok', href: '#', icon: 'TK' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl tracking-ultra-wide text-cream-50"
            >
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warmgray-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed for the modern woman who appreciates quality and timeless elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-extra-wide text-warmgray-400 uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-extra-wide text-warmgray-400 uppercase mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-extra-wide text-warmgray-400 uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream-100 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="hairline-divider my-12 opacity-20" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 border border-warmgray-600 rounded-full flex items-center justify-center text-xs font-medium hover:border-gold-500 hover:text-gold-500 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Payment */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-xs text-warmgray-500">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-warmgray-600">We accept</span>
              <div className="flex items-center gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((pmt) => (
                  <span
                    key={pmt}
                    className="px-2 py-1 bg-warmgray-800 rounded text-xs text-warmgray-400"
                  >
                    {pmt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
