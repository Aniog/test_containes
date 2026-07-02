import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[var(--velmora-dark)] text-[var(--velmora-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <h2 className="font-serif text-2xl tracking-wider-luxury mb-4">
                VELMORA
              </h2>
            </Link>
            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-wider-luxury uppercase mb-4 text-[var(--velmora-accent)]">
              Shop
            </h3>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-bg)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-wider-luxury uppercase mb-4 text-[var(--velmora-accent)]">
              Help
            </h3>
            <ul className="space-y-3">
              {['Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-bg)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-wider-luxury uppercase mb-4 text-[var(--velmora-accent)]">
              Company
            </h3>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-bg)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--velmora-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Payment icons */}
            <div className="flex items-center gap-4 text-[var(--velmora-text-muted)]">
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">Visa · Mastercard · Amex · PayPal</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-[var(--velmora-text-muted)] hover:text-[var(--velmora-accent)] transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-xs text-[var(--velmora-text-muted)]">
              © 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
