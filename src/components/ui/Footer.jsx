import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-base text-white">
      {/* Main footer */}
      <div className="max-w-container mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-foregroundMuted font-sans leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Warm gold, quiet luxury, everyday elegance.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-accentLight">Shop</h4>
            <div className="flex flex-col gap-3 text-sm text-foregroundMuted">
              <Link to="/shop?category=earrings" className="hover:text-accent transition-colors">Earrings</Link>
              <Link to="/shop?category=necklaces" className="hover:text-accent transition-colors">Necklaces</Link>
              <Link to="/shop?category=huggies" className="hover:text-accent transition-colors">Huggies</Link>
              <Link to="/shop" className="hover:text-accent transition-colors">All Jewelry</Link>
            </div>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-accentLight">Help</h4>
            <div className="flex flex-col gap-3 text-sm text-foregroundMuted">
              <Link to="/shipping" className="hover:text-accent transition-colors">Shipping & Returns</Link>
              <Link to="/care" className="hover:text-accent transition-colors">Jewelry Care</Link>
              <Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link>
              <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-accentLight">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-foregroundMuted">
              <Link to="/about" className="hover:text-accent transition-colors">Our Story</Link>
              <Link to="/journal" className="hover:text-accent transition-colors">Journal</Link>
              <Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline/20">
        <div className="max-w-container mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foregroundMuted font-sans">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons placeholder */}
          <div className="flex items-center gap-3 text-foregroundMuted">
            <span className="text-xs font-sans tracking-wide">Visa</span>
            <span className="text-xs font-sans tracking-wide">Mastercard</span>
            <span className="text-xs font-sans tracking-wide">Amex</span>
            <span className="text-xs font-sans tracking-wide">PayPal</span>
          </div>
          {/* Social links */}
          <div className="flex items-center gap-4 text-foregroundMuted">
            <a href="#" className="hover:text-accent transition-colors text-xs font-sans tracking-wide">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors text-xs font-sans tracking-wide">Pinterest</a>
            <a href="#" className="hover:text-accent transition-colors text-xs font-sans tracking-wide">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
