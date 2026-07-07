import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-linen">
      {/* Newsletter Section */}
      <div className="border-b border-velmora-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl text-velmora-ivory mb-3">
            Join for 10% off your first order
          </h3>
          <p className="text-sm text-velmora-mist mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and jewelry styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-velmora-graphite border border-velmora-stone/30 text-velmora-ivory placeholder:text-velmora-mist px-5 py-3 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-ultra-wide text-velmora-ivory block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-velmora-mist leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-ivory mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/collection" className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-ivory mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Track Order'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-ivory mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-velmora-mist hover:text-velmora-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velmora-graphite flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Payment icons */}
          <div className="flex items-center gap-4">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <div
                key={method}
                className="w-10 h-6 bg-velmora-graphite rounded flex items-center justify-center"
              >
                <span className="text-[8px] text-velmora-mist font-medium uppercase">{method}</span>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-velmora-mist hover:text-velmora-gold tracking-wider uppercase transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-velmora-stone">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
