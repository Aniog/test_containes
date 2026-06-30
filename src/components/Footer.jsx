import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-stone-300">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide text-cream font-medium">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-stone-400 mt-4 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Elegant, accessible, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-stone-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider-custom text-cream font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="font-sans text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider-custom text-cream font-semibold mb-5">Help</h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-wider-custom text-cream font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {['Our Story', 'Journal', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-stone-400 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline border-stone-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">Visa</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">Mastercard</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">Amex</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">PayPal</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-stone-500">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
