import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-velmora-deep text-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3
              className="font-serif text-2xl tracking-widest mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.25em' }}
            >
              VELMORA
            </h3>
            <p className="text-sm text-velmora-cream/70 leading-relaxed mb-8 max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Every piece is designed for the modern woman who values quiet luxury.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-velmora-cream/20 rounded-full flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-velmora-cream/20 rounded-full flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-goldLight">
              Shop
            </h4>
            <ul className="space-y-4">
              {['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Bestsellers', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-goldLight">
              Help
            </h4>
            <ul className="space-y-4">
              {['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us', 'Track Order'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-velmora-goldLight">
              Company
            </h4>
            <ul className="space-y-4">
              {['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Affiliate Program'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-velmora-cream/70 hover:text-velmora-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons + Copyright */}
        <div className="border-t border-velmora-cream/10 mt-12 lg:mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            {/* Payment method icons - using text placeholders */}
            {['VISA', 'MC', 'AMEX', 'PP'].map((pay) => (
              <span
                key={pay}
                className="text-xs border border-velmora-cream/20 rounded px-2 py-1 text-velmora-cream/50"
              >
                {pay}
              </span>
            ))}
          </div>
          <p className="text-xs text-velmora-cream/40">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
