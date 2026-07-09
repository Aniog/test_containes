import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80" style={{ backgroundColor: '#2C2420', color: 'rgba(250, 247, 242, 0.8)' }}>
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-cream no-underline tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed font-sans">
              Demi-fine jewelry crafted for the modern woman. Designed to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 font-sans font-medium mb-4">Shop</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><Link to="/shop" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-sans">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-sans">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-sans">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/70 hover:text-gold transition-colors no-underline font-sans">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 font-sans font-medium mb-4">Help</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Shipping & Returns</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Size Guide</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Care Instructions</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">FAQ</span></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/40 font-sans font-medium mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Our Story</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Sustainability</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Press</span></li>
              <li><span className="text-sm text-cream/70 font-sans cursor-pointer hover:text-gold transition-colors">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-sans">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/40 font-sans">Visa</span>
            <span className="text-xs text-cream/40 font-sans">Mastercard</span>
            <span className="text-xs text-cream/40 font-sans">Apple Pay</span>
            <span className="text-xs text-cream/40 font-sans">PayPal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/50 font-sans cursor-pointer hover:text-gold transition-colors">Instagram</span>
            <span className="text-xs text-cream/50 font-sans cursor-pointer hover:text-gold transition-colors">Pinterest</span>
            <span className="text-xs text-cream/50 font-sans cursor-pointer hover:text-gold transition-colors">TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
