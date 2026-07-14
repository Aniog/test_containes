import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-velmora-black text-velmora-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-velmora-cream block mb-4">
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-velmora-silver max-w-xs">
              Crafted to be treasured. Demi-fine 18K gold jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest-xl uppercase text-velmora-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm hover:text-velmora-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-velmora-charcoal mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-velmora-silver">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>

            {/* Payment icons */}
            <div className="flex items-center gap-3">
              {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
                <div
                  key={p}
                  className="px-2 py-1 border border-velmora-charcoal rounded text-[10px] font-sans font-medium text-velmora-silver tracking-wider"
                >
                  {p}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              {['Instagram', 'Pinterest', 'TikTok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-sans text-velmora-silver hover:text-velmora-gold transition-colors tracking-wider uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
