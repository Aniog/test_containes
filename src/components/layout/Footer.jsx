import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-ultra-wide font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-brand-cool-gray font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday elegance.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-brand-cool-gray hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-cool-gray hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-cool-gray hover:text-brand-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide mb-4 text-brand-soft-gray">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide mb-4 text-brand-soft-gray">
              Help
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Care Guide</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">FAQ</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Contact Us</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Size Guide</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wide mb-4 text-brand-soft-gray">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Journal</Link></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Sustainability</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-brand-cool-gray hover:text-brand-gold transition-colors font-sans">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-brand-charcoal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-cool-gray font-sans">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Payment icons as text badges */}
              <span className="text-[10px] text-brand-cool-gray font-sans border border-brand-charcoal px-2 py-0.5 rounded">VISA</span>
              <span className="text-[10px] text-brand-cool-gray font-sans border border-brand-charcoal px-2 py-0.5 rounded">MASTERCARD</span>
              <span className="text-[10px] text-brand-cool-gray font-sans border border-brand-charcoal px-2 py-0.5 rounded">AMEX</span>
              <span className="text-[10px] text-brand-cool-gray font-sans border border-brand-charcoal px-2 py-0.5 rounded">PAYPAL</span>
              <span className="text-[10px] text-brand-cool-gray font-sans border border-brand-charcoal px-2 py-0.5 rounded">APPLE PAY</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
