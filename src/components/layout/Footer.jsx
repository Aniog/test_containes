import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--velmora-text)] text-[var(--velmora-bg)]">
      <div className="velmora-container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-[0.2em] font-light block mb-4">
              VELMORA
            </Link>
            <p className="velmora-body-sm text-[var(--velmora-text-light)] max-w-xs">
              Demi-fine gold jewelry, crafted to be treasured. Designed for the modern woman who values quality and elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[var(--velmora-text-light)] hover:text-[var(--velmora-accent)] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--velmora-text-light)] hover:text-[var(--velmora-accent)] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--velmora-text-light)] hover:text-[var(--velmora-accent)] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[var(--velmora-text-light)] hover:text-[var(--velmora-accent)] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="velmora-body-xs text-[var(--velmora-text-light)] mb-4">Shop</h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="velmora-body-sm text-[var(--velmora-text-light)] hover:text-[var(--velmora-bg)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="velmora-body-xs text-[var(--velmora-text-light)] mb-4">Help</h4>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="velmora-body-sm text-[var(--velmora-text-light)] hover:text-[var(--velmora-bg)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="velmora-body-xs text-[var(--velmora-text-light)] mb-4">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="velmora-body-sm text-[var(--velmora-text-light)] hover:text-[var(--velmora-bg)] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--velmora-text-light)]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="velmora-body-xs text-[var(--velmora-text-light)]">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="velmora-body-xs text-[var(--velmora-text-light)]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-white/10 rounded text-[10px] font-medium tracking-wider"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
