import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-base)] text-[var(--color-offwhite)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.15em] mb-4">VELMORA</div>
            <p className="text-sm text-white/60 max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link block">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="footer-link block">Shipping</a>
              <a href="#returns" className="footer-link block">Returns</a>
              <a href="#care" className="footer-link block">Jewelry Care</a>
              <a href="#contact" className="footer-link block">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#sustainability" className="footer-link block">Sustainability</a>
              <a href="#press" className="footer-link block">Press</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {currentYear} Velmora Fine Jewelry. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white/80">Privacy</a>
            <a href="#terms" className="hover:text-white/80">Terms</a>
            <a href="#accessibility" className="hover:text-white/80">Accessibility</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-[10px] tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
