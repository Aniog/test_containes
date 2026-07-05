import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-brand-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-pale-gray font-sans">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-pale-gray hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-pale-gray hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-pale-gray hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-super-wide uppercase font-sans font-semibold text-brand-cream mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-charcoal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-pale-gray font-sans">
              &copy; 2026 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">Privacy</a>
              <a href="#" className="text-xs text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">Terms</a>
              <a href="#" className="text-xs text-brand-pale-gray hover:text-brand-gold transition-colors font-sans">Cookies</a>
            </div>
            {/* Payment icons placeholder */}
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(card => (
                <span key={card} className="text-[10px] tracking-wider uppercase text-brand-pale-gray border border-brand-charcoal rounded px-2 py-1 font-sans">
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
