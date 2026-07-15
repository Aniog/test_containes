import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0806] text-[#E5DFD3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[3px] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8A7F6D] leading-relaxed">
              Fine jewelry, thoughtfully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#C5A46E] mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#C5A46E] mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[2px] text-[#C5A46E] mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8A7F6D]">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
              <a href="#pinterest" className="hover:text-white transition-colors">Pinterest</a>
              <a href="#tiktok" className="hover:text-white transition-colors">TikTok</a>
            </div>
            <span className="hidden md:inline">·</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>

          <div className="flex gap-3 text-[10px] tracking-widest">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PP</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
