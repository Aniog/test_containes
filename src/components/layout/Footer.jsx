import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Pinterest } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us']
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Stockists', 'Careers']

export default function Footer() {
  return (
    <footer className="bg-velmora text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] font-semibold">
              VELMORA
            </Link>
            <p className="text-white/50 text-xs leading-relaxed mt-4 max-w-[200px]">
              Demi-fine jewelry crafted for everyday elegance. 18K gold-plated pieces designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-5 text-velmora-gold">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-5 text-velmora-gold">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.6875rem] tracking-widest uppercase font-semibold mb-5 text-velmora-gold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[0.6875rem] text-white/40">&copy; {new Date().getFullYear()} Velmora Fine Jewelry</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Pinterest">
                <Pinterest size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[0.625rem] tracking-wider uppercase text-white/30">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
