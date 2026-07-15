import { Link } from 'react-router-dom'
import { Instagram, Pinterest } from 'lucide-react'

const footerSections = [
  {
    title: 'Shop',
    links: [
      { label: 'All Jewelry', href: '/shop' },
      { label: 'Earrings', href: '/shop?category=earrings' },
      { label: 'Necklaces', href: '/shop?category=necklaces' },
      { label: 'Sets', href: '/shop?category=sets' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', href: '#' },
      { label: 'Returns & Exchanges', href: '#' },
      { label: 'Care Guide', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-velmora-900 text-velmora-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-white">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-400 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the everyday. Elevated essentials, made to last.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-400 hover:text-velmora-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-velmora-400 hover:text-velmora-gold transition-colors">
                <Pinterest className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs tracking-wider uppercase text-velmora-400 font-medium mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-velmora-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hairline border-velmora-800 mt-12 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((label) => (
              <span
                key={label}
                className="text-[10px] uppercase tracking-wider text-velmora-500 bg-velmora-800 px-2 py-1 rounded"
              >
                {label}
              </span>
            ))}
          </div>
          <p className="text-xs text-velmora-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}