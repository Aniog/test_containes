import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react'

const shopLinks = ['All Products', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals']
const helpLinks = ['Contact Us', 'Shipping & Returns', 'Jewelry Care', 'Size Guide', 'FAQs']
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates']

export default function Footer() {
  return (
    <footer className="bg-brand-base text-white pt-20 pb-10">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl tracking-widest font-semibold mb-4">
              VELMORA
            </p>
            <p className="text-brand-muted-light text-sm leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted to be treasured. Designed for the modern woman who values quality, beauty, and quiet luxury.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-muted-light hover:text-brand-gold transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((text) => (
                <li key={text}>
                  <Link to="/shop" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((text) => (
                <li key={text}>
                  <Link to="/" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((text) => (
                <li key={text}>
                  <Link to="/" className="text-sm text-brand-muted-light hover:text-white transition-colors">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted-light">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-brand-muted-light">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="flex items-center gap-2">
              <span className="w-8 h-5 border border-brand-muted-light/30 rounded text-[9px] flex items-center justify-center">VISA</span>
              <span className="w-8 h-5 border border-brand-muted-light/30 rounded text-[9px] flex items-center justify-center">MC</span>
              <span className="w-8 h-5 border border-brand-muted-light/30 rounded text-[9px] flex items-center justify-center">AMEX</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
