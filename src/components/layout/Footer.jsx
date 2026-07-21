import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-warm-black text-ivory/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-ivory">
              VELMORA
            </Link>
            <p className="mt-3 text-sm text-stone leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Everyday elegance, accessible luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-ivory mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-stone hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-ivory mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-stone hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wide-btn uppercase text-ivory mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-stone hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((p) => (
              <span
                key={p}
                className="text-[10px] font-semibold tracking-wider uppercase text-stone border border-charcoal rounded px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-stone hover:text-gold transition-colors duration-300" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone hover:text-gold transition-colors duration-300" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone hover:text-gold transition-colors duration-300" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
