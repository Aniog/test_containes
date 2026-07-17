import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80">
      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-white tracking-wide no-underline">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Crafted to be treasured. Demi-fine jewelry designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">FAQ</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Our Story</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Journal</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Careers</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-gold transition-colors no-underline">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment Icons (text placeholders) */}
            <span className="text-xs text-white/40 font-sans">Visa</span>
            <span className="text-xs text-white/40 font-sans">Mastercard</span>
            <span className="text-xs text-white/40 font-sans">Amex</span>
            <span className="text-xs text-white/40 font-sans">Apple Pay</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors no-underline">Instagram</a>
            <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors no-underline">Pinterest</a>
            <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors no-underline">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
