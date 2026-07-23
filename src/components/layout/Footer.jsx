import { Link } from 'react-router-dom'
import { Instagram, Globe, Twitter } from 'lucide-react'

const footerSections = {
  Shop: [
    { label: 'All Jewelry', path: '/collection' },
    { label: 'Earrings', path: '/collection' },
    { label: 'Necklaces', path: '/collection' },
    { label: 'Huggies', path: '/collection' },
    { label: 'Sets', path: '/collection' },
  ],
  Help: [
    { label: 'Shipping & Delivery', path: '/' },
    { label: 'Returns & Exchanges', path: '/' },
    { label: 'Care Guide', path: '/' },
    { label: 'FAQ', path: '/' },
    { label: 'Contact Us', path: '/' },
  ],
  Company: [
    { label: 'Our Story', path: '/' },
    { label: 'Journal', path: '/' },
    { label: 'Sustainability', path: '/' },
    { label: 'Careers', path: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#A0988A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white font-semibold tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Timeless pieces made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs tracking-wider uppercase font-sans font-semibold mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors duration-300"
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
        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span
                key={method}
                className="text-xs px-2 py-1 border border-[#333] rounded text-[#666]"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}