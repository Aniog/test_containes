import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-velmora-dark text-velmora-warmWhite">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] font-semibold text-velmora-warmWhite">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-warmWhite/70 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted with intention. Designed to be treasured, worn, and loved — every single day.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map(item => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-velmora-warmWhite/70 hover:text-velmora-warmWhite transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase mb-4 text-velmora-gold">Help</h4>
            <ul className="space-y-2">
              {['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Size Guide'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-velmora-warmWhite/70 hover:text-velmora-warmWhite transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-[0.1em] uppercase mb-4 text-velmora-gold">Company</h4>
            <ul className="space-y-2">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-velmora-warmWhite/70 hover:text-velmora-warmWhite transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-warmWhite/70 hover:text-velmora-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warmWhite/70 hover:text-velmora-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-velmora-warmWhite/70 hover:text-velmora-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-velmora-borderDark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-velmora-warmWhite/60">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-3 items-center">
            <span className="text-xs text-velmora-warmWhite/60">We accept</span>
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(card => (
              <span key={card} className="text-xs bg-velmora-borderDark px-2 py-1 rounded text-velmora-warmWhite/80">
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
