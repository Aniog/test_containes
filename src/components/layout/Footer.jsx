import { Link } from 'react-router-dom'
import { Instagram, Globe } from 'lucide-react'

const footerColumns = {
  shop: {
    title: 'Shop',
    links: ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  },
  help: {
    title: 'Help',
    links: ['Shipping & Delivery', 'Returns & Exchanges', 'Care Guide', 'FAQ', 'Contact Us'],
  },
  company: {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Journal', 'Careers', 'Sustainability'],
  },
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Afterpay', 'Klarna']

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-cream mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="text-sm text-cream/60 mt-3 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated pieces designed for everyday elegance.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-colors" aria-label="Pinterest">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerColumns).map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-cream/50 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/70 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="px-2.5 py-1 text-[10px] uppercase tracking-wider border border-cream/10 text-cream/50 rounded"
              >
                {icon}
              </span>
            ))}
          </div>
          <p className="text-xs text-cream/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}