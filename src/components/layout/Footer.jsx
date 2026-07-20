import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-velmora-black text-velmora-bg pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60 leading-relaxed">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/60">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-velmora-gold transition-colors">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="block hover:text-velmora-gold transition-colors">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="block hover:text-velmora-gold transition-colors">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="block hover:text-velmora-gold transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/60">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="block hover:text-velmora-gold transition-colors">Shipping</a>
              <a href="#returns" className="block hover:text-velmora-gold transition-colors">Returns</a>
              <a href="#care" className="block hover:text-velmora-gold transition-colors">Jewelry Care</a>
              <a href="#contact" className="block hover:text-velmora-gold transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] mb-4 text-white/60">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-velmora-gold transition-colors">Our Story</Link>
              <Link to="/journal" className="block hover:text-velmora-gold transition-colors">Journal</Link>
              <a href="#sustainability" className="block hover:text-velmora-gold transition-colors">Sustainability</a>
              <a href="#careers" className="block hover:text-velmora-gold transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MC · AMEX · PAYPAL
          </div>
        </div>
      </div>
    </footer>
  )
}
