import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'Size Guide', 'FAQ', 'Contact Us']
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Press', 'Affiliates']

export default function Footer() {
  return (
    <footer className="bg-base text-surface/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="font-serif text-2xl text-white tracking-[0.2em] uppercase">
              Velmora
            </Link>
            <p className="font-sans text-sm text-surface/50 mt-4 max-w-xs leading-relaxed">
              Demi-fine gold jewelry for the modern woman. Crafted to be treasured, priced to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-surface/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-surface/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-surface/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs text-white uppercase tracking-[0.1em] font-medium mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="font-sans text-sm text-surface/50 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs text-white uppercase tracking-[0.1em] font-medium mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-surface/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs text-white uppercase tracking-[0.1em] font-medium mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-surface/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-divider border-surface/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-surface/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-[10px] text-surface/30 uppercase tracking-[0.08em]">Visa</span>
            <span className="font-sans text-[10px] text-surface/30 uppercase tracking-[0.08em]">Mastercard</span>
            <span className="font-sans text-[10px] text-surface/30 uppercase tracking-[0.08em]">Amex</span>
            <span className="font-sans text-[10px] text-surface/30 uppercase tracking-[0.08em]">PayPal</span>
            <span className="font-sans text-[10px] text-surface/30 uppercase tracking-[0.08em]">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
