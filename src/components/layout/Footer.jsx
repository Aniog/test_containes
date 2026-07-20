import { Link } from 'react-router-dom'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', path: '/shop' },
      { label: 'Earrings', path: '/shop?category=earrings' },
      { label: 'Necklaces', path: '/shop?category=necklaces' },
      { label: 'Sets', path: '/shop?category=sets' },
      { label: 'Bestsellers', path: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Returns', path: '/shipping' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Care Guide', path: '/care' },
      { label: 'Track Order', path: '/track' },
      { label: 'Contact Us', path: '/contact' },
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

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Klarna']

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-200">
      {/* Newsletter */}
      <div className="border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-serif text-2xl text-cream-50 mb-3">Join the Circle</h3>
            <p className="text-sm text-dark-400 mb-6 leading-relaxed">
              Be the first to know about new collections, exclusive edits, and early access — delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-dark-800 border border-dark-700 px-4 py-3 text-sm text-cream-50 placeholder:text-dark-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="bg-gold-500 text-dark-900 px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-400 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl text-cream-50 tracking-widest">
              VELMORA
            </Link>
            <p className="text-xs text-dark-400 mt-3 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Every piece tells a story of quiet luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-dark-400 hover:text-cream-50 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-dark-400 hover:text-cream-50 transition-colors" aria-label="Pinterest">
                <Heart className="h-4 w-4" />
              </a>
              <a href="#" className="text-dark-400 hover:text-cream-50 transition-colors" aria-label="Twitter">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map(col => (
            <div key={col.title}>
              <h4 className="text-xs tracking-widest uppercase text-cream-50 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-dark-400 hover:text-cream-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-dark-500">
            <span className="tracking-wider uppercase">We Accept</span>
            <div className="flex gap-2">
              {paymentIcons.map(icon => (
                <span key={icon} className="bg-dark-800 px-2 py-1 text-[10px] text-dark-400 rounded">
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