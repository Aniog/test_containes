import { Link } from 'react-router-dom'
import { Instagram, Twitter, Globe } from 'lucide-react'

const footerLinks = {
  Shop: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  Help: ['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Guide', 'FAQ'],
  Company: ['About Us', 'Our Story', 'Journal', 'Sustainability', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-velmora-950 text-velmora-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wider text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-500 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Ethical, timeless, and made for everyday elegance.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="p-2 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:text-gold transition-colors" aria-label="Pinterest">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-white mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-velmora-500 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment icons + bottom */}
        <div className="hairline border-velmora-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Afterpay'].map((method) => (
              <span
                key={method}
                className="text-xs text-velmora-600 bg-velmora-900/50 px-2.5 py-1 rounded"
              >
                {method}
              </span>
            ))}
          </div>
          <p className="text-xs text-velmora-600">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}