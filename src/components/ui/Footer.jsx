import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-warm-black border-t border-pearl/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-cream font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-warm-gray font-light leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Elegant, accessible, made to be treasured.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-cream/50 uppercase mb-5 font-sans">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-warm-gray hover:text-gold transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-cream/50 uppercase mb-5 font-sans">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-warm-gray hover:text-gold transition-colors font-light cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-cream/50 uppercase mb-5 font-sans">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-warm-gray hover:text-gold transition-colors font-light cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-pearl/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-warm-gray hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
              <span
                key={card}
                className="text-[10px] tracking-wider text-warm-gray/60 border border-pearl/20 rounded px-2 py-1 font-sans"
              >
                {card}
              </span>
            ))}
          </div>

          <p className="text-xs text-warm-gray/50 font-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
