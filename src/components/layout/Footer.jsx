import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1C1814] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 pb-12 border-b border-[#3A3530]">
          {/* Logo */}
          <div>
            <div className="serif text-2xl tracking-[0.2em] mb-4">VELMORA</div>
            <p className="text-sm text-[#B8976E] tracking-widest">EST 2018</p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Shop</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="block hover:text-[#B8976E] transition-colors">All Jewelry</Link>
              <Link to="/shop" className="block hover:text-[#B8976E] transition-colors">Earrings</Link>
              <Link to="/shop" className="block hover:text-[#B8976E] transition-colors">Necklaces</Link>
              <Link to="/shop" className="block hover:text-[#B8976E] transition-colors">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Help</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Shipping</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Returns</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Care Guide</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Contact</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Company</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Our Story</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Journal</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Stockists</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Careers</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-xs tracking-[0.15em] uppercase mb-4 text-[#B8976E]">Follow</div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Instagram</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">Pinterest</a>
              <a href="#" className="block hover:text-[#B8976E] transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B655F] tracking-widest">
          <div>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#B8976E]">Privacy</a>
            <a href="#" className="hover:text-[#B8976E]">Terms</a>
            <a href="#" className="hover:text-[#B8976E]">Accessibility</a>
          </div>
          <div className="flex gap-3 text-lg">VISA · MC · AMEX · APPLE PAY</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer