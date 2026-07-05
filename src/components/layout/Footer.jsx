import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-container mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-nav text-warm-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Demi-fine jewelry crafted for everyday elegance. 18K gold plated, hypoallergenic, and designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-semibold text-warm-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-semibold text-warm-white mb-4">Help</h4>
            <ul className="space-y-2.5">
              {['Shipping & Returns', 'FAQ', 'Size Guide', 'Contact Us', 'Track Order'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-nav font-semibold text-warm-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-stone-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-5">
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3 text-stone-500 text-xs">
            <span>Visa</span>
            <span>&middot;</span>
            <span>Mastercard</span>
            <span>&middot;</span>
            <span>Amex</span>
            <span>&middot;</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
