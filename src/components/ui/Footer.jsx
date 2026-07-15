import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0D0D0D] text-[#F7F4EF] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 pb-12 border-b border-white/10">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif-display text-2xl tracking-[0.15em]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-[180px]">
              Fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B89778]">All Jewelry</Link>
              <Link to="/shop?category=earrings" className="block hover:text-[#B89778]">Earrings</Link>
              <Link to="/shop?category=necklaces" className="block hover:text-[#B89778]">Necklaces</Link>
              <Link to="/shop?category=huggies" className="block hover:text-[#B89778]">Huggies</Link>
              <Link to="/shop?category=sets" className="block hover:text-[#B89778]">Sets</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="block hover:text-[#B89778]">Shipping</a>
              <a href="#returns" className="block hover:text-[#B89778]">Returns</a>
              <a href="#care" className="block hover:text-[#B89778]">Jewelry Care</a>
              <a href="#contact" className="block hover:text-[#B89778]">Contact Us</a>
              <a href="#size" className="block hover:text-[#B89778]">Size Guide</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Company</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-[#B89778]">Our Story</Link>
              <Link to="/journal" className="block hover:text-[#B89778]">Journal</Link>
              <a href="#sustainability" className="block hover:text-[#B89778]">Sustainability</a>
              <a href="#careers" className="block hover:text-[#B89778]">Careers</a>
              <a href="#press" className="block hover:text-[#B89778]">Press</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
          </div>

          {/* Payment icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em]">
            VISA · MC · AMEX · APPLE PAY
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#instagram" className="hover:text-white">IG</a>
            <a href="#pinterest" className="hover:text-white">PT</a>
            <a href="#tiktok" className="hover:text-white">TT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
