import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pinterest } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'Contact Us', 'FAQ']
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists']

export default function Footer() {
  return (
    <footer className="bg-velmora-warm text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-xl tracking-widest">
              VELMORA
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, ethically made, designed to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-velmora-gold-light transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold-light transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-velmora-gold-light transition-colors" aria-label="Pinterest">
                <Pinterest className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'All Jewelry' ? '/shop' : `/shop?category=${link}`}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm tracking-wide mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wide mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4 text-white/30 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}