import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'Care Instructions', to: '/care' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Journal', to: '/journal' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press', to: '/press' },
  ],
}

const paymentIcons = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay']

export default function Footer() {
  return (
    <footer className="bg-onyx-950 text-velvet-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="font-serif text-3xl tracking-ultra-wide text-ivory-100">
              VELMORA
            </Link>
            <p className="mt-4 font-sans text-sm text-velvet-400 leading-relaxed max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman — premium quality, accessible luxury.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Pinterest', 'TikTok', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-velvet-700 flex items-center justify-center text-velvet-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs font-sans font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-200 mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-velvet-400 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-ivory-200 mb-5">
              Stay in Touch
            </h3>
            <p className="font-sans text-sm text-velvet-400 mb-4">
              Join for 10% off your first order.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-onyx-900 border border-velvet-700 px-3 py-2 text-sm text-ivory-100 placeholder:text-velvet-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-400 text-onyx-950 px-4 py-2 text-xs font-sans font-medium tracking-ultra-wide uppercase hover:bg-gold-500 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-onyx-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velvet-500">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon}
                className="font-sans text-[10px] text-velvet-500 tracking-wide uppercase"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
