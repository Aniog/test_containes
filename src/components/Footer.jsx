import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1A1816] text-[#FAF7F2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em]">VELMORA</Link>
            <p className="text-xs text-[#8A7F70] mt-3 max-w-[180px]">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#8A7F70]">SHOP</div>
            <div className="space-y-2 text-sm">
              <Link to="/shop" className="footer-link block">All Jewelry</Link>
              <Link to="/shop?category=Earrings" className="footer-link block">Earrings</Link>
              <Link to="/shop?category=Necklaces" className="footer-link block">Necklaces</Link>
              <Link to="/shop?category=Huggies" className="footer-link block">Huggies</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#8A7F70]">HELP</div>
            <div className="space-y-2 text-sm">
              <a href="#shipping" className="footer-link block">Shipping</a>
              <a href="#returns" className="footer-link block">Returns</a>
              <a href="#care" className="footer-link block">Jewelry Care</a>
              <a href="#contact" className="footer-link block">Contact Us</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs tracking-[0.1em] mb-4 text-[#8A7F70]">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="footer-link block">Our Story</Link>
              <Link to="/journal" className="footer-link block">Journal</Link>
              <a href="#sustainability" className="footer-link block">Sustainability</a>
              <a href="#careers" className="footer-link block">Careers</a>
            </div>
          </div>
        </div>

        <div className="divider bg-[#3A3530] mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#8A7F70]">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-[#C5A46E]">Privacy</a>
            <a href="#terms" className="hover:text-[#C5A46E]">Terms</a>
          </div>
          
          <div className="flex items-center gap-4">
            <span>18K Gold Plated • Hypoallergenic</span>
            <div className="hidden md:block">•</div>
            <div className="flex gap-3">
              <a href="#instagram" aria-label="Instagram">IG</a>
              <a href="#pinterest" aria-label="Pinterest">PT</a>
              <a href="#tiktok" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
